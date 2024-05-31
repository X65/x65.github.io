---
title: Breadboard schematic
category: news
author: smokku
---

This is basically what I've built on the breadboards.

![X65 schematic](/media/2024-03-12_schematic.png)

Left part handles multiplexing CPU address and data bus over a shared 8 GPIO lines of RP2040.
There are three 74245 buffers used by PIO program to "scan" 24 lines, by sequentially enabling
each other.

Right part are two 8MB SQPI memories used by PIO program to emulate parallel memory
connected to CPU.

These two PIO programs work together to provide memory access and memory-mapped I/O to 65816 CPU.

![X65 breadboard](/media/2024-03-12_board.png)
