---
title: VGM import in SGU Tracker
category: news
author: smokku
---

SGU Tracker can now import music from `.vgm` and compressed `.vgz` files.

VGM stores timed writes to sound-chip registers. There are no tracker patterns
or instrument definitions to copy, so the importer has to reconstruct them
from what the original chip was doing.

This needs separate support for each chip family. The supported chips include:

- FM: YM2413, YM2151, YM2203/2608/2610/2612 and YMF278B
- PSG and wavetable: SN76489, AY-3-8910, YM2149, Sunsoft 5B, SAA1099,
  NES APU, Konami SCC, VRC7 and HuC6280
- PCM: Sega PCM, RF5C68/164, MultiPCM, OKIM6295, MSM6258, C140, Irem GA20,
  Capcom QSound and YM2610 ADPCM

When a note starts, the importer reads the chip state to work out its pitch
and instrument settings. Notes using the same settings share an instrument
in the resulting song. Note releases and immediate cuts are kept separate.

Register changes during a note need translating too. A steady pitch slide
can become a hardware sweep, a repeating pitch change can become vibrato or
an arpeggio, and a volume decay shared by several notes can become an instrument
envelope. Changes that do not fit those effects are stored as automation.

Finally, the importer looks for a suitable row timing and repeated musical
phrases, and slices them into patterns in sequences. This gives an editable
tracker song that plays through SGU-1's nine channels.

There is plenty of material to try at [vgmrips.net](https://vgmrips.net/).
