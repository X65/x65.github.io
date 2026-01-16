---
title: 2025 Year in Review
category: news
author: smokku
---

2025 was the year X65 became a real platform: not just “hardware that runs demos”, but an ecosystem with a serious emulator, modern tooling, an OS taking shape, and DEV-boards in people’s hands. It was also the year of big, practical course-corrections - from video connector realities, through simpler interrupt handling, to a late-year architectural reset toward a Gen2 design and a new custom sound direction.

Here’s the journey, step by step:

---

### January 23, 2025 - Hold-And-Modify Graphics Mode

After the MODE reshuffle left MODE6 unused, I filled the gap with an Amiga-inspired HAM mode - adapted to X65 constraints. The big win was fitting it into a 64 kB bank by targeting 320x240 and using a 6bpp bitpacked format (4 pixels in 3 bytes). The final encoding ended up being its own thing: 8 base colors, per-channel signed deltas with a tuned quantum, plus an extra BLEND command for 50/50 mixing. I expected “too Amiga”, but the results look distinctly X65 - and the gradients are gorgeous.

---

### February 3, 2025 - Emu - X65 Emulator

With RP2350B still unavailable, I pivoted hard into *Emu* - because modern retro development needs an emulator as much as it needs an assembler. I forked a C64 example from the `chip-emulators` toolbox and started swapping the C64’s chips for X65’s equivalents, wiring them together “like on a breadboard” via the pin-mask model. CGIA was brought in by compiling the real firmware C code inside Emu (rewriting the ASM parts to C), which kept Emu close to hardware and even exposed firmware bugs along the way. Audio was trickier: SD-1 isn’t widely emulated, so I used OPL3 as a stopgap and landed on ESFMu after Nuked-OPL3 produced only buzzing.

### February 4, 2025 - Emu - Development Builds

Set up continuous development builds for Linux, Linux ARM, and Windows, automatically produced by GitHub CI on every commit. That made Emu easy to track, test, and share without manual packaging.

### February 13, 2025 - W65C816S CPU support in Emu

The early M6502 core wasn’t enough, so I extended the emulator into a full W65C816S CPU implementation using the `chip-emulators` approach: a C wrapper plus a Python instruction decoder generator driven by opcode/addressing-mode tables. To validate it, I built a headless CPU simulator for automated testing, and even got it to run EhBASIC in interactive mode. Meticulous work, but massively easier than writing a 65816 emulator from scratch.

### February 21, 2025 - Tech Demos Galore

Rewrote the tech demos to run as proper 65C816 assembly programs on the “real” emulated machine, instead of firmware hacks that merely simulated CPU behavior for hardware validation. This was the start of shifting demos from “bring-up tools” into actual software artifacts.

### February 27, 2025 - W65C816S CPU emulation done

Huge milestone: 65816 emulation reached “complete” status - all instructions, all addressing modes, in both Emulation and Native modes. Emu itself leveled up too: full 16 MB memory, a sprites debugger, GPIO/joystick ports, label support in the disassembler, and a VTY-style UART console. At this point Emu stopped being a prototype emulator and started being a development environment.

---

### March 14, 2025 - Switching from DVI-D to "The Other Connector"

Swapped the board’s DVI-D connector for an HDMI-shaped connector to make the machine easier to use in the real world - fewer adapters, standard cables, fewer headaches. The key is that X65 still outputs a plain DVI-compatible TMDS stream; the connector shape is convenience, not “HDMI feature compliance”. I also looked at what it would take to do full HDMI with embedded audio and it’s possible, but expensive enough to push into a potential “Plus” variant later.

### March 29, 2025 - OS/816 - Multitasking and System Calls

OS/816 made a major leap: multitasking scheduler and I/O working, plus a COP-based syscall framework that plays nicely with task switching. The important detail: if a task switch happens mid-syscall, the kernel completes the syscall but returns into the next scheduled task, not necessarily the original caller - clean, modern behavior. A UART echo task using `read()`/`write()` validated the API, and the CLI shell began taking shape with `help` and `echo` as a foundation.

---

### May 13, 2025 - Simplified Interrupt Controller

A solid reality check: using I²C GPIO expanders as an interrupt controller was a latency trap. The solution was aggressively simple - no masking, no ACKing, just a NAND gate to combine sources and a bus transceiver to read interrupt lines in one go. Less “controller”, more “truth table”, but fast and easy to reason about.

### May 18, 2025 - Expansion port connector

Moved to a proper expansion connector by repurposing a PCIe x4 slot - cheap, available, and much safer than improvised exposed headers. It set the stage for real add-ons without the constant fear of accidental shorts.

### May 20, 2025 - PCM out, DAC in

A major audio redesign: dropped the old PCM channels and integrated an SGTL5000 stereo DAC/ADC codec, giving X65 two sample playback channels. It’s a deliberate trade: beeps now require waveform generation in memory, but sampled sound effects become straightforward - crucial for modern game ports. The ADC also enables line-in sampling and “built-in sampler” style workflows, and the $5 codec cost was largely offset by removing the previous PCM parts.

### May 23, 2025 - Direct video memory editing using debugger

Showed off one of the most “8-bit in spirit” features of X65: uniform shared memory between CPU and VPU. Editing RAM live in the debugger immediately alters video output, with no abstraction barrier in the way - exactly the kind of immediacy that makes these machines fun to develop for.

### May 25, 2025 - VS Code Debugger Extension for X65 Emu

Built `cc65-dbg`, a real VS Code debugging extension for cc65/ca65 workflows using Debug Adapter Protocol (DAP). It parses `ld65 --dbgfile` output and drives a DAP-capable emulator/adapter, enabling breakpoint synchronization, register/memory views, disassembly, watch expressions, and module-scoped globals. This removed the “manual breakpoint pain” and made X65 development feel like modern debugging, just aimed at 6502/65816.

### May 31, 2025 - Flash chip added

Stopped waiting on RP2354B and added a FLASH chip directly to the board. Routing three devices on the QPI bus was tight and awkward, but worth it to unblock progress and reduce dependency on future parts availability.

---

### June 24, 2025 - First batch of DEV-boards

DEV-board Rev1 went into production (PCBWay), explicitly positioned as Milestone 1 rather than “the final computer”. The purpose was clear: validate hardware, push OS/816 forward, and enable real apps and ports. At the same time, the long-term shape of the full machine was laid out: an all-in-one keyboard computer with a 70% keyboard, familiar port layout, extra USB, and internal bays for storage in that classic Amiga/MSX spirit.

---

### July 6, 2025 - Let's talk about keyboards…

With DEV-boards in motion, attention shifted to Milestone 2: the full computer, starting with the keyboard. After trying to find a suitable off-the-shelf option and failing on quality/bulk availability, I committed to designing a custom keyboard. The proposed layout is intentionally “retro-familiar” with packed ortholinear top rows to support wild remaps, plus exploration of ISO/ANSI Enter variants and optional extra keys in place of LEDs.

### July 21, 2025 - DEV-boards arrived

The boards landed, looked great, and the real bring-up phase began. This was the moment the year’s emulator/tooling groundwork met real hardware again.

### July 24, 2025 - X65 in its natural habitat

A simple but satisfying snapshot: the DEV-board setup as an actual “kit” on a desk, looking like a real machine-in-progress rather than a lab oddity.

### July 29, 2025 - Power LED brightness

A fun usability gimmick with a very 65816-flavored punchline: switching into native mode makes the power LED visibly brighter. Small detail, big charm.

---

### August 5, 2025 - MEMTEST command

Tracked down weird crashes to memory instability under certain conditions, tied to overclocked RP2350 timing assumptions. Added a MEMTEST command to stress-test both PSRAM banks and produce useful copy-speed and block-test diagnostics, making it much easier to tune and validate memory parameters.

### August 6, 2025 - Video bitclock shenanigans

A monitor revealed an ugly truth: the system was outputting ~76 Hz because video timing was implicitly tied to an overclocked system clock - bad news when VBI timing needs a perfect 60 Hz. The fix was architectural: decouple video timing from the core clock by using the second PLL for HSTX/DVI timing, and settle on a clean 336 MHz system clock that also produces a sweet-spot 112 MHz PSRAM clock divider. Result: perfect 60 Hz video and a more stable overall timing plan.

### August 21, 2025 - DEV-board live demo

Ran a real-hardware demo (`mixed_modes.xex`) showcasing CGIA’s strengths: multiple background layers, transparency, and mid-screen mode split via display list. And it’s mirrored in Emu for easy sharing and reproduction.

### August 27, 2025 - Games & Vintage Days Wrocław

Announced X65 presence at Games & Vintage Days Wrocław, including a talk on building a machine emulator “the EZ way” based on the Emu experience. A clear pivot toward public-facing community building.

---

### September 4, 2025 - Block diagram

Published a DEV-board block diagram, clarifying the intended conceptual architecture: RIA816 as the north/south-bridge for the 65816, CGIA as a VPU behind it, both designed as “real chips” in spirit even if currently implemented as microcontroller firmware. It reframed the MCU approach as an implementation detail, not the identity of the platform.

### September 18, 2025 - Sample playback

Demonstrated sampled sound playback on real hardware: 8-bit, 8 kHz, streamed through two DAC channels. A practical proof that the “PCM out, DAC in” direction delivered what it promised.

### September 24, 2025 - Sokoban

First real game landed on X65: Sokoban by zbyti, written in MAD-Pascal, using a tilemap engine and joystick controls. Importantly, it runs on real hardware and can be tried online in Emu - a perfect “community software begins” milestone.

### September 25, 2025 - Joy-test

Confirmed multi-button joystick support on the DEV-board and published a simple joy-test program that reads and visualizes controller state. Small utility, big impact on confidence for game development.

### September 25, 2025 - USB serial port

Made the USB-C power connection pull double duty as a USB-CDC serial port by extending ESP-AT on the ESP32. Result: no external wiring to access the monitor - just plug into a PC and program/debug directly.

### September 29, 2025 - AT+LED

Started RGB LED support, discovered the on-board LEDs were wired wrong, and worked around it by disabling them via jumper and using an external LED board. Since LEDs are driven by the ESP32 running ESP-AT, the solution was firmware-level: add a new `AT+LED=...` command to control color output.

### September 30, 2025 - Buzzer is back

Used the last spare ESP32-C3 GPIO to add a piezo buzzer and restore classic system beep vibes. Naturally, it comes with its own AT command: `AT+BUZZ=...`.

---

### October 3, 2025 - New GPIO extender

Replaced TI TCA6416A with NXP PCAL6416A to get interrupt masking. The old chip would generate IRQs on any input change whether you cared or not; PCAL6416A lets you request only the interrupts you actually want, and stays pin/register compatible while adding extra features.

### October 5, 2025 - EXPansion port breakout

Built breakout boards to actually use and test the expansion port, and documented the exposed signals: 8-bit data/address buses, CPU control lines, I/O enables and interrupt lines, power rails, I²C, UART, audio in/out, and WS2812 LED data. This turned the expansion concept into something developers can start experimenting with immediately.

### October 7, 2025 - I²C on-board port

Added an on-board I²C header inspired by the Amiga Clockport, intended for simple add-ons like RTC modules or sensors. A small connector with big “make it hackable” energy.

### October 13, 2025 - Games & Vintage Days Wrocław 2025

The event happened - and it went great. Strong audience interest, lots of questions, and genuine excitement even from people outside the retro niche. Kids especially latched onto Sokoban, which is exactly the kind of “instant hands-on” win you want at a show.

### October 14, 2025 - Od Zera Do Emulatora

Published the talk on building an emulator “from zero”, using Emu as the practical example. This neatly closed the loop on the year’s early emulator focus: it wasn’t just a development necessity, it became something teachable and shareable.

### October 18, 2025 - How does accessing external devices on X65 work?

Released a short tutorial video explaining external device access on X65, featuring the interrupt controller. More documentation, more onboarding, less tribal knowledge.

---

### November 4, 2025 - Test tune on Yamaha YMF825 SD-1 chip

A proof of life for the SD-1 path: a test program demonstrated memory-mapped access to YMF825 registers from the 65816, producing sound on real hardware. Even with later plans changing, this was an important validation milestone.

### November 6, 2025 - CGIA palette MODE0

CGIA gained paletted text/graphics modes (MODE0 and MODE1) using palette tables stored in CGIA registers rather than dedicated color-attribute memory. This enabled colorful modes with tiny memory footprints, with selectable 1-4 bpp depths and a clever half-bright behavior in 4 bpp. MODE0 also got a multi-color variant with its own constraints, trading glyph range for color richness.

### November 12, 2025 - Double-width and 80 columns text modes

Expanded text rendering with double-width support across all text modes (useful for classic “wide character” looks), and demonstrated a readable 80-column text mode using multi-color text behavior and 4x8 cells. This was a practical usability upgrade, not just a graphics party trick.

---

### December 2, 2025 - X65 prototype Gen2

The biggest pivot of the year: after testing Gen1 DEV-board, the architecture moved to Gen2 with two RP2350 MCUs instead of one - splitting roles into North Bridge (CPU+memory) and South Bridge (I/O + VPU). With the extra GPIO budget, this approach can eliminate lots of discrete glue logic. After community discussion, there was also a major sound direction change: moving away from the Yamaha SD-1 (supply too sketchy) toward a custom MCU-based sound processor driving a modern CODEC+DSP. The Gen2 prototype was already mostly working, and the breadboard behaved better than the Gen1 PCB.

### December 27, 2025 - Custom SGU-1 sound chip

Introduced SGU-1 (Sound Generator Unit 1): a custom sound chip design based on tildearrow’s Sound Unit (tSU), wrapped in a memory-mapped register interface. A quick PoC already played a Rob Hubbard SID tune via a rough register translation, running in the web Emu. It’s explicitly early and imperfect, but it marks a clear new direction: if nobody wants to manufacture cool synth chips anymore, X65 will build its own path.

---

Looking back, 2025 was about turning X65 into something you can actually develop for: Emu matured into a real environment, VS Code tooling removed friction, OS/816 gained real OS-shaped features, and the DEV-board crossed into physical reality and public demos. And then, right at the end, the project did the most “serious” thing it can do: change course decisively toward a simpler, more scalable Gen2 architecture and a sound solution the project can truly own.
