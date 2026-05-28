#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { createServer } from 'node:http';
import { Socket } from 'node:net';
import { createHash, randomBytes } from 'node:crypto';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(import.meta.dirname, '..');
const dataFile = path.join(root, '_data', 'emu.yml');
const paletteFile = path.join(root, 'media', 'X65-palette_256.gpl');
const outDir = path.join(root, 'emu', 'roms');
const width = Number(process.env.WIDTH ?? 384);
const height = Number(process.env.HEIGHT ?? 240);
const fps = Number(process.env.FPS ?? 60);
const seconds = Number(process.env.CAPTURE_SECONDS ?? process.env.SECONDS ?? 30);
const startDelayMs = Number(process.env.START_DELAY_MS ?? 2500);
const skipVisibleFrames = Number(process.env.SKIP_VISIBLE_FRAMES ?? 10);
const chrome = process.env.CHROME ?? 'google-chrome';
const port = Number(process.env.PORT ?? 8765);
const cdpPort = Number(process.env.CDP_PORT ?? 9222);
const keepTemp = process.env.KEEP_TEMP === '1';
const debugBrowser = process.env.DEBUG_BROWSER === '1';

function parseGalleryRoms(yaml) {
  const items = [];
  let item = null;
  for (const rawLine of yaml.split('\n')) {
    const line = rawLine.trimEnd();
    if (line.startsWith('- ')) {
      if (item) items.push(item);
      item = {};
    }
    if (!item) continue;
    const match = line.match(/^\s*([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (!match) continue;
    const [, key, value] = match;
    item[key] = value.replace(/^['"]|['"]$/g, '');
  }
  if (item) items.push(item);

  return items
    .filter((item) => item.gallery === 'true' && item.xex)
    .map((item) => item.xex.includes('http') ? item.xex : `roms/${item.xex}`);
}

function gifNameForRom(rom) {
  const urlish = rom.split('&')[0].split('?')[0];
  const base = path.basename(urlish, path.extname(urlish));
  return `${base}.gif`;
}

function parseGimpPalette(gpl) {
  const colors = [];
  for (const rawLine of gpl.split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#') || /^[A-Za-z]/.test(line)) continue;
    const match = line.match(/^(\d+)\s+(\d+)\s+(\d+)(?:\s|$)/);
    if (!match) continue;
    colors.push(match.slice(1, 4).map(Number));
  }

  if (colors.length !== 256) {
    throw new Error(`Expected 256 colors in ${paletteFile}, found ${colors.length}`);
  }
  return colors;
}

async function writePalettePpm(filePath) {
  const colors = parseGimpPalette(await readFile(paletteFile, 'utf8'));
  const header = Buffer.from('P6\n16 16\n255\n', 'ascii');
  const pixels = Buffer.from(colors.flat());
  await writeFile(filePath, Buffer.concat([header, pixels]));
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitUntil(targetTimeMs) {
  const delay = targetTimeMs - performance.now();
  if (delay > 0) await wait(delay);
}

function hash(buffer) {
  return createHash('sha256').update(buffer).digest('hex');
}

async function isBlankFrame(filePath) {
  return new Promise((resolve, reject) => {
    const child = spawn('magick', [
      filePath,
      '-format',
      '%k',
      'info:',
    ], { stdio: ['ignore', 'pipe', 'inherit'] });
    let output = '';
    child.stdout.on('data', (chunk) => {
      output += chunk;
    });
    child.on('error', reject);
    child.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`magick exited with ${code}`));
        return;
      }
      resolve(Number(output) <= 1);
    });
  });
}

function detectLoop(frameHashes) {
  const first = frameHashes[0];
  const firstChanged = frameHashes.findIndex((frameHash) => frameHash !== first);
  if (firstChanged === -1) return { start: 0, count: 1 };

  const repeatedFirst = frameHashes.findIndex((frameHash, index) => {
    return index > firstChanged && frameHash === first;
  });
  if (repeatedFirst !== -1) return { start: 0, count: repeatedFirst };

  const seen = new Map();
  for (const [index, frameHash] of frameHashes.entries()) {
    if (seen.has(frameHash)) {
      const start = seen.get(frameHash);
      return { start, count: index - start };
    }
    seen.set(frameHash, index);
  }

  return { start: 0, count: frameHashes.length };
}

async function terminate(child) {
  if (child.exitCode !== null || child.signalCode !== null) return;
  child.kill();
  await Promise.race([once(child, 'exit'), wait(3000)]);
}

function spawnChecked(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit', ...options });
    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} exited with ${code}`));
      }
    });
  });
}

function startServer() {
  const server = createServer(async (req, res) => {
    const reqUrl = new URL(req.url ?? '/', `http://127.0.0.1:${port}`);
    let filePath = path.join(root, decodeURIComponent(reqUrl.pathname));
    if (!filePath.startsWith(root)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }
    if (reqUrl.pathname.endsWith('/')) filePath = path.join(filePath, 'index.html');

    try {
      const body = await readFile(filePath);
      const ext = path.extname(filePath);
      const type = {
        '.html': 'text/html; charset=utf-8',
        '.js': 'text/javascript; charset=utf-8',
        '.wasm': 'application/wasm',
        '.xex': 'application/octet-stream',
        '.png': 'image/png',
        '.gif': 'image/gif',
      }[ext] ?? 'application/octet-stream';
      res.writeHead(200, { 'content-type': type });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  });
  server.listen(port, '127.0.0.1');
  return once(server, 'listening').then(() => server);
}

async function httpJson(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`GET ${url} failed: ${response.status}`);
  return response.json();
}

class CdpSocket {
  constructor(url) {
    this.url = new URL(url);
    this.nextId = 1;
    this.pending = new Map();
    this.buffer = Buffer.alloc(0);
    this.eventHandlers = new Map();
  }

  async connect() {
    const key = randomBytes(16).toString('base64');
    this.socket = await new Promise((resolve, reject) => {
      const socket = new Socket();
      socket.once('error', reject);
      socket.connect(Number(this.url.port), this.url.hostname, () => resolve(socket));
    });

    const pathAndQuery = `${this.url.pathname}${this.url.search}`;
    this.socket.write([
      `GET ${pathAndQuery} HTTP/1.1`,
      `Host: ${this.url.host}`,
      'Upgrade: websocket',
      'Connection: Upgrade',
      `Sec-WebSocket-Key: ${key}`,
      'Sec-WebSocket-Version: 13',
      '',
      '',
    ].join('\r\n'));

    const header = await this.readHandshake();
    const accept = createHash('sha1')
      .update(`${key}258EAFA5-E914-47DA-95CA-C5AB0DC85B11`)
      .digest('base64');
    if (!header.includes(' 101 ') || !header.includes(`Sec-WebSocket-Accept: ${accept}`)) {
      throw new Error('Chrome DevTools WebSocket handshake failed');
    }

    this.socket.on('data', (chunk) => this.onData(chunk));
  }

  readHandshake() {
    return new Promise((resolve, reject) => {
      let header = Buffer.alloc(0);
      const onData = (chunk) => {
        header = Buffer.concat([header, chunk]);
        const end = header.indexOf('\r\n\r\n');
        if (end === -1) return;
        this.socket.off('data', onData);
        this.socket.off('error', reject);
        this.buffer = header.subarray(end + 4);
        resolve(header.subarray(0, end).toString('utf8'));
      };
      this.socket.on('data', onData);
      this.socket.once('error', reject);
    });
  }

  onData(chunk) {
    this.buffer = Buffer.concat([this.buffer, chunk]);
    for (;;) {
      if (this.buffer.length < 2) return;
      const first = this.buffer[0];
      const second = this.buffer[1];
      let length = second & 0x7f;
      let offset = 2;
      if (length === 126) {
        if (this.buffer.length < 4) return;
        length = this.buffer.readUInt16BE(2);
        offset = 4;
      } else if (length === 127) {
        if (this.buffer.length < 10) return;
        const high = this.buffer.readUInt32BE(2);
        const low = this.buffer.readUInt32BE(6);
        length = high * 2 ** 32 + low;
        offset = 10;
      }
      const masked = (second & 0x80) !== 0;
      const maskLength = masked ? 4 : 0;
      if (this.buffer.length < offset + maskLength + length) return;
      let payload = this.buffer.subarray(offset + maskLength, offset + maskLength + length);
      if (masked) {
        const mask = this.buffer.subarray(offset, offset + 4);
        payload = Buffer.from(payload.map((byte, index) => byte ^ mask[index % 4]));
      }
      this.buffer = this.buffer.subarray(offset + maskLength + length);

      const opcode = first & 0x0f;
      if (opcode === 1) this.onMessage(payload.toString('utf8'));
      if (opcode === 8) return;
    }
  }

  onMessage(text) {
    const message = JSON.parse(text);
    if (message.method) {
      const handlers = this.eventHandlers.get(message.method) ?? [];
      for (const handler of handlers) handler(message.params ?? {});
      return;
    }
    if (!message.id) return;
    const pending = this.pending.get(message.id);
    if (!pending) return;
    this.pending.delete(message.id);
    if (message.error) pending.reject(new Error(JSON.stringify(message.error)));
    else pending.resolve(message.result);
  }

  send(method, params = {}) {
    const id = this.nextId++;
    const body = Buffer.from(JSON.stringify({ id, method, params }));
    const mask = randomBytes(4);
    let header;
    if (body.length < 126) {
      header = Buffer.from([0x81, 0x80 | body.length]);
    } else if (body.length < 65536) {
      header = Buffer.alloc(4);
      header[0] = 0x81;
      header[1] = 0x80 | 126;
      header.writeUInt16BE(body.length, 2);
    } else {
      header = Buffer.alloc(10);
      header[0] = 0x81;
      header[1] = 0x80 | 127;
      header.writeUInt32BE(0, 2);
      header.writeUInt32BE(body.length, 6);
    }
    const masked = Buffer.from(body.map((byte, index) => byte ^ mask[index % 4]));
    this.socket.write(Buffer.concat([header, mask, masked]));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }

  close() {
    this.socket?.end();
  }

  on(method, handler) {
    const handlers = this.eventHandlers.get(method) ?? [];
    handlers.push(handler);
    this.eventHandlers.set(method, handlers);
  }
}

async function newChromePage(chromeProcess) {
  for (let attempt = 0; attempt < 100; attempt++) {
    try {
      const version = await httpJson(`http://127.0.0.1:${cdpPort}/json/version`);
      if (version.webSocketDebuggerUrl) break;
    } catch {
      await wait(100);
    }
  }

  const target = await httpJson(`http://127.0.0.1:${cdpPort}/json/new?about:blank`, { method: 'PUT' });
  const cdp = new CdpSocket(target.webSocketDebuggerUrl);
  await cdp.connect();
  if (debugBrowser) {
    cdp.on('Runtime.consoleAPICalled', (params) => {
      const text = params.args?.map((arg) => arg.value ?? arg.description ?? '').join(' ');
      if (text) console.log(`[browser:${params.type}] ${text}`);
    });
  }
  cdp.on('Runtime.exceptionThrown', (params) => {
    const details = params.exceptionDetails;
    const exception = details?.exception;
    const message = exception?.description ?? exception?.value ?? details?.text ?? 'exception';
    console.error(`[browser:exception] ${message}`);
    for (const frame of details?.stackTrace?.callFrames ?? []) {
      console.error(`  at ${frame.functionName || '<anonymous>'} ${frame.url}:${frame.lineNumber + 1}:${frame.columnNumber + 1}`);
    }
  });
  await cdp.send('Page.enable');
  await cdp.send('Runtime.enable');
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: false,
  });
  chromeProcess.on('exit', () => cdp.close());
  return cdp;
}

async function captureRom(cdp, rom, tempRoot) {
  const name = gifNameForRom(rom);
  const framesDir = path.join(tempRoot, path.basename(name, '.gif'));
  const palettePpm = path.join(tempRoot, 'x65-palette.ppm');
  const outputFile = path.join(outDir, name);
  await mkdir(framesDir, { recursive: true });
  await writePalettePpm(palettePpm);

  const url = `http://127.0.0.1:${port}/emu/emu.html?disable-speaker-icon&disable-gui&file=${encodeURIComponent(rom)}`;
  console.log(`Capturing ${rom} -> emu/roms/${name}`);
  await cdp.send('Page.navigate', { url });
  await wait(startDelayMs);

  if (debugBrowser) {
    const state = await cdp.send('Runtime.evaluate', {
      expression: `JSON.stringify({
        readyState: document.readyState,
        title: document.title,
        canvasWidth: document.getElementById('canvas')?.width,
        canvasHeight: document.getElementById('canvas')?.height,
        canvasClientWidth: document.getElementById('canvas')?.clientWidth,
        canvasClientHeight: document.getElementById('canvas')?.clientHeight,
        moduleReady: typeof Module !== 'undefined',
        webapiReady: typeof Module !== 'undefined' && typeof Module._webapi_ready === 'function'
      })`,
      returnByValue: true,
    });
    console.log(`[browser:state] ${state.result.value}`);
  }

  let sawVisibleFrame = false;
  let skippedVisibleFrames = 0;
  for (let attempt = 0; attempt < 120; attempt++) {
    const shot = await cdp.send('Page.captureScreenshot', { format: 'png', fromSurface: true });
    const frame = Buffer.from(shot.data, 'base64');
    const probeFile = path.join(framesDir, 'probe.png');
    await writeFile(probeFile, frame);
    if (!await isBlankFrame(probeFile)) {
      sawVisibleFrame = true;
      if (skippedVisibleFrames >= skipVisibleFrames) break;
      skippedVisibleFrames++;
      await wait(1000 / fps);
    } else {
      await wait(500);
    }
  }
  if (!sawVisibleFrame || skippedVisibleFrames < skipVisibleFrames) {
    throw new Error(`Timed out waiting to skip ${skipVisibleFrames} visible emulator frames for ${rom}`);
  }

  const frameCount = Math.max(1, Math.round(fps * seconds));
  const frameHashes = [];
  const frameDurationMs = 1000 / fps;
  const captureStartMs = performance.now();
  for (let index = 0; index < frameCount; index++) {
    await waitUntil(captureStartMs + index * frameDurationMs);
    const shot = await cdp.send('Page.captureScreenshot', { format: 'png', fromSurface: true });
    const frame = Buffer.from(shot.data, 'base64');
    frameHashes.push(hash(frame));
    await writeFile(
      path.join(framesDir, `frame-${String(index).padStart(4, '0')}.png`),
      frame,
    );
  }

  const loop = detectLoop(frameHashes);
  console.log(`Encoding ${loop.count}/${frameCount} captured frames from frame ${loop.start}`);

  if (loop.count === 1) {
    await spawnChecked('magick', [
      path.join(framesDir, `frame-${String(loop.start).padStart(4, '0')}.png`),
      '+dither',
      '-remap',
      palettePpm,
      outputFile,
    ]);
    return;
  }

  await spawnChecked('ffmpeg', [
    '-y',
    '-loglevel',
    'error',
    '-framerate',
    String(fps),
    '-start_number',
    String(loop.start),
    '-i',
    path.join(framesDir, 'frame-%04d.png'),
    '-i',
    palettePpm,
    '-frames:v',
    String(loop.count),
    '-filter_complex',
    '[0:v][1:v]paletteuse=dither=none',
    '-gifflags',
    '-offsetting',
    outputFile,
  ]);
}

async function main() {
  const roms = parseGalleryRoms(await readFile(dataFile, 'utf8'));
  if (roms.length === 0) throw new Error('No gallery ROMs found in _data/emu.yml');

  const selected = process.argv.slice(2);
  const capture = selected.length > 0 ? roms.filter((rom) => selected.includes(path.basename(rom))) : roms;
  if (capture.length === 0) throw new Error(`No selected ROMs matched: ${selected.join(', ')}`);

  const tempRoot = await mkdtemp(path.join(tmpdir(), 'x65-emu-gif-'));
  const server = await startServer();
  const userDataDir = await mkdtemp(path.join(tmpdir(), 'x65-chrome-'));
  const chromeProcess = spawn(chrome, [
    '--headless=new',
    '--use-gl=angle',
    '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader',
    '--ignore-gpu-blocklist',
    '--no-sandbox',
    `--remote-debugging-port=${cdpPort}`,
    `--user-data-dir=${userDataDir}`,
    'about:blank',
  ], { stdio: ['ignore', 'ignore', 'inherit'] });

  let cdp;
  try {
    cdp = await newChromePage(chromeProcess);
    for (const rom of capture) await captureRom(cdp, rom, tempRoot);
  } finally {
    cdp?.close();
    await terminate(chromeProcess);
    server.close();
    if (keepTemp) {
      console.log(`Keeping temporary frames in ${tempRoot}`);
    } else {
      await rm(tempRoot, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
    }
    await rm(userDataDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
