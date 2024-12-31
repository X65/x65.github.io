---
title: 2024 Year in Review
category: news
author: smokku
---

What a year it’s been! The idea of building my own microcomputer has been bouncing around my head for a while now. Earliest [scrape of x65.zone](https://web.archive.org/web/20180813014535/http://x65.zone/) is from August 13, 2018. But 2024 was the year things got real. I rolled up my sleeves and dived into actual hardware. Looking back, it’s kind of wild how far this has come.

Here’s the journey, step by step:

---

### January 14, 2024 – Let’s build a computer

Finally took the plunge and started assembling a breadboard prototype. My kid got curious and hung around, asking questions about "building a computer." It was a sweet moment — kind of felt like sharing a piece of my childhood fascination with him.

### January 19, 2024 – RIA firmware running

Got the RP6502 Picocomputer's RIA firmware running on the breadboard. It’s based on solid, well-documented code, so this felt like laying a sturdy foundation to build on.

### January 20, 2024 – CPU bus circuitry adventures

Took a deep dive into the `65C816`’s data bus cycle. Used some clever ideas inspired by the Neo6502 project to work with a full 24-bit address space without eating up too many GPIO pins. It was tricky, but satisfying.

### January 27, 2024 – Choosing RAM

Had to nix the idea of vintage DRAM (too impractical) and went with PSRAM. Four chips, 4MB each, to simulate 16MB for the CPU. Vintage vibes with modern reliability.

### February 18-29, 2024 – Making it all talk

This month was all about getting the CPU, bus, and memory to play nice. Highlights included:

- Setting up memory decoders to save GPIO pins.
- Seeing the PIO drive the CPU.
- Switching memory to QPI mode for speed.
- Watching the CPU execute NOPs — a humble but thrilling first step!

### March 1-21, 2024 – Memory, text, and video

A lot happened in March:

- Got the CPU reading and writing memory.
- Switched to faster memory chips.
- Even optimized some clock cycles for a speed boost.
- Then came the fun part: VGA output, followed by DVI. Text mode on DVI was a game-changer — it felt like the project was finally starting to "speak."

### March 24-26, 2024 – Hello, internet

Updated the website and launched a BBS for the X65. It’s all about community, right? Bonus: made the BBS web-accessible for those who want the nostalgia but don’t run a terminal.

### April-June 2024 – protoA, protoB, and pretty pictures

The breadboard was maxing out its potential, so I designed and received the `protoA` PCB. It had quirks, but it worked. By June, `protoB` arrived, complementing the build. Along the way:

- Implemented text mode, high-res mode, and multi-color graphics.
- Expanded to 256 colors.
- Added sprites! Watching them dance around the screen felt awesome.

### August-November 2024 – New hardware, big upgrades

Upgraded to the RP2350 microcontroller and new PSRAM. Then brought in `SMON` — a machine language monitor that made debugging so much easier. By November, sprite functionality was fully fleshed out, and I created an image converter to simplify content creation.

### December 2024 – Demos galore

Ended the year with a bang:

- "Shadow of the Beast" demo? Check.
- `MODE7`-style affine transformations? Check.
- Mixed-mode display list? Double-check.
- Even revamped the monitor console with a full 256-color palette for some extra flair.

---

Looking back, 2024 has been one heck of a ride. The X65 went from a breadboard dream to something tangible, with hardware and software actually working together. I can’t wait to see where it goes in 2025!
