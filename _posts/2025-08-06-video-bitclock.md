---
title: Video bitclock shenanigans
category: news
author: smokku
---

When testing the X65 DEV-board with a newly purchased monitor,
I noticed that the firmware generates a DVI video signal at 76 Hz framerate.

This is bad… The main timing source of the system is VBI (Vertical-Blank Interrupt)
and it *needs* to run at exact 60 Hz. This is a result of a recent change in the
RP2350 system clock (overclocked) to 366 MHz.

It is time to decouple video timings from the system clock.  
The snag is that the HSTX hardware driving the DVI signal uses a non-fractional
divisor for its clock divider. It is always an integer part of the source clock.
So when I bumped the system clock, the DVI bitclock also went up.

The RP2350 has two PLLs we can use as hardware clock sources.  
One is used as the system clock source (which other hardware can use to source clocks from)
and the second is traditionally used to generate 48 MHz for USB hardware.

Again… the USB hardware clock uses a non-fractional divider of the source clock,
so it needs to be driven with an integer multiple of `48`.  
Sooo… if we set the system clock as a multiple of `48`, we can source a really stable
USB clock straight from it and free the second PLL for other uses… 🤔

What options around 366 MHz (the current stable clock) do we have?

* 384 MHz - system does not boot…
* 336 MHz - works fine and stable! 🎉

I can work with 336 MHz.

A by-product of this system clock is that it drives PSRAM at 112 MHz
(another integer divider), which happens to be a sweet spot for the APS6404L-3SQR-ZR
at 3.3V.

I ❤️ when things converge so nicely…

Now the second PLL is free to configure however I like, and I can drive the HSTX DVI-D
video signal at a *perfect* 60 Hz.

```console
]status
X65 microcomputer

CPU : ~4.2MHz
CORE: 336.0MHz
DVI : 768x480@60.0Hz/24bpp
RAM : 16MB, 2 banks, 112.0MHz
RAM0: 8MB AP Memory (b6f712535d0d)
RAM1: 8MB AP Memory (b4f712535d0d)
```
