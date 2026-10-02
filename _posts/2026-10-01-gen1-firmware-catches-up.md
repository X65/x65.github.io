---
title: Gen1 firmware catches up
category: news
author: smokku
---

The gen1 board has been running its own branch of the firmware for a while.
I finally took the time to bring it up to date with everything done for
the emulator. Along the way I found things that only a real board shows.

Fixes:

- **CGIA NMI stuck low.** The renderer and the PIX interrupt could lose an
  acknowledge, and the edge triggered NMI never fired again. Programs froze
  waiting for VBI while the picture kept going. State changes are serialized now.
- **VRAM cache tags** were lying across bank switches.
- **MODE1 2/3/4 bpp** encoder read the scan address instead of the bitmap.
- **USB**: a DualShock 4 froze programs within seconds. The host driver and
  TinyUSB come from upstream RP6502 now, and the slots running out is handled.
- Unbacked HID pad slots read as disconnected.
