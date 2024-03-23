---
title: VAB memory cycle optimization
category: news
author: smokku
---

This is going to be one weird clock… 😹

![PHI2 timings](/images/2024-03-07_PHI2_timings.png)

WDC65816 has CPU two outputs signaling whether there is a Valid Data Address (VDA)
or Valid Program Address (VPA) on the bus. Most of the time one of these signals
is high, as the CPU is usually reading or writing memory (this is what CPUs do)
or reading a next instruction to be executed.

This is ~70% of the cycles, but there are instructions that do some stuff internally
in the microprocessor logic, using cycles but not using memory bus.

We can detect such cycles (joining VDA|VPA to one VAB signal)
and drive PHI2 clock not waiting for a memory round-trip.
This will significantly speed up instructions having these internal cycles,
mitigating the effect of the memory QPI bus round-trip slowing down the CPU.

We already had a non-monotonic clock, as the read cycles take longer than write cycles,
so the newly introduced fast cycles will make it even more weird… `¯\_(ツ)_/¯`
