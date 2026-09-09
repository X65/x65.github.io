---
title: SGU-1 diagnostic registers
category: news
author: smokku
---

SGU-1 now lets programs read its internal synthesis state through diagnostic
registers.

Setting `DIAG`, bit 7 of a channel's `FLAGS1` register, changes what selected
registers return when read. Writes still control the chip as usual.

The diagnostic values include:

- Each operator's envelope attenuation
- The envelope stage and key-on delay state
- Each operator's current 16-bit output sample
- The channel mix before volume, filtering and stereo placement
- The channel envelope level

Besides helping with debugging, this provides the information needed for
VU meters. SGU Tracker now reads the envelope levels directly from the
synthesis core for its meters.

GOTCHA: The two bytes of a sample are read separately while audio rendering continues,
so they can come from different samples if the value changes between reads.
This is not intended for resampling the audio output - just diagnostics.

Emu supports the same diagnostic registers, allowing programs to use them
on both the emulator and the hardware.
