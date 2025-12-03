---
title: X65 prototype Gen2
category: news
author: smokku
---

There are some big changes coming for X65 microcomputer project.

After testing the first version of DEV-board, I've decided to make a huge
implementation change - instead of implementing both RIA and CGIA
in one RP2350 microcontroller, X65 will use two separate MCU chips
communicating over a high-speed bus, each implementing one functional chip.

First chip takes the role of North Bridge - interfacing CPU and memory.
Second chip takes the role of South Bridge - interfacing to external hardware
and implementing the VPU with its spare processing power.

With all the available GPIO pins of two MCUs I can get rid of all the discrete components from the board.

After a long discussion with community, I've also decided to not go
with Yamaha SD-1 FM synthesizer as the sound chip of X65.
SD-1 is not produced anymore and the supply is sketchy.
Instead, we will go with yet another RP2350 MCU, implementing our own custom
Sound Processor unit, driving a modern CODEC+DSP chip.

The prototype of Gen2 X65 is already taking shape and mostly working.

![X65 Gen2 status](/media/2025-11-30-Gen2_running.jpg)

The breadboard prototype already works better than the Gen1 PCB.

![X65 Gen2 breadboard](/media/2025-11-30-Gen2_prototype.jpg)

The future looks bright for the machine…
