---
title: VAB memory cycle optimization
category: news
author: smokku
---

This is going to be one weird clock… 😹

![PHI2 timings](/media/2024-03-07_PHI2_timings.png)

The WDC65816 has two outputs signaling whether there is a Valid Data Address (VDA)
or a Valid Program Address (VPA) on the bus. Most of the time, one of these signals
is high, as the CPU is usually reading or writing memory (this is what CPUs do)
or fetching the next instruction to be executed.

This accounts for ~70% of the cycles, but there are instructions that do some stuff internally
in the microprocessor logic - using cycles, but not touching the memory bus.

We can detect such cycles (by combining VDA|VPA into a single VAB signal)
and drive the PHI2 clock without waiting for a memory round-trip.
This will significantly speed up instructions that include internal cycles,
mitigating the impact of the memory QPI bus round-trip slowing down the CPU.

We already had a non-monotonic clock, since read cycles take longer than write cycles,
so the newly introduced fast cycles will make it even weirder… `¯\_(ツ)_/¯`
