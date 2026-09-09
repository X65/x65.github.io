---
title: Scripting Emu
category: news
author: smokku
---

Emu can now run commands from a script file.

Scripts can advance a fixed number of frames, provide joystick input, save
screenshots and check memory. This makes it possible to automate tests that
previously needed someone to operate the emulator.

For example, save this as `drive.scr`:

```text
run 120
joy right
run 60
shot "frame.png"
exit
```

On Linux, it can run without a visible window using Xvfb:

    xvfb-run -a emu --disable-gui --script drive.scr roms/game.xex

Replace `roms/game.xex` with the program you want to test.

The `expect-crc` and `peek` commands check a frame checksum and memory values.
A failed check reports the script line and exits with code 1, so these scripts
can also be used in CI. Other commands inspect CPU and CGIA state, trace
instructions or stop at a particular address.

The `vdump`, `vpeek` and `vpoke` commands access the backing memory seen by
CGIA's DMA. This matters at `$FEC0`–`$FFFF`, where CPU accesses normally go to
memory-mapped registers instead.

For a single screenshot after 120 frames, there is a shortcut:

    emu --screenshot out.png --frames 120 roms/game.xex
