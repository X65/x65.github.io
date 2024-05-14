---
title: RAM circuitry
category: news
author: smokku
---

Providing [65816][1] CPU with full 16MB of parallel DRAM, it was designed for, is simply not an option.

Large vintage DRAM chips are prohibitively expensive. They are not produced anymore,
cost more than the CPU itself and we would need plethora of them in one machine.
Not mentioning designing a Dynamic RAM refresh circuit is not really what I want to do.

We need to find a better way.

Fortunately there is a group of cheap Pseudo-Static RAM chips designed specifically for microcontroller use.
Serial PSRAM chips have internal refresh circuitry, externally appearing as <acronym title="Static RAM">SRAM</acronym>.
[SPI][2] interface does not require as many pins as the parallel RAM, which is ideal, as we do not have
many to spare on the [RP2040][3].

And they are cheap! Like a few dollars per chip cheap!

Let's connect 4x of 4MB (FOUR MEGAbytes!) chips - ISSI `IS66WVS4M8` and write a PIO program that will
emulate linear 16MB of memory for the CPU.

65816 is living in a Matrix, thinking there is some real DRAM memory and I/O hardware out there…

![X65 breadboard](/media/2024-01-27_board.png)

[1]: https://en.wikipedia.org/wiki/WDC_65C816
[2]: https://en.wikipedia.org/wiki/Serial_Peripheral_Interface
[3]: https://en.wikipedia.org/wiki/RP2040
