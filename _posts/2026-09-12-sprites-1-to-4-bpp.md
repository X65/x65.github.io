---
title: Sprites in 1 to 4 bpp
category: news
author: smokku
---

CGIA sprites are no longer stuck with 2 bits per pixel.

Each sprite now picks its depth, from 1 to 4 bpp, in its flags byte, and every
sprite gets a 16 entry palette. Pixel data uses the same packing as MODE1, so
you only need one idea in your head for both.

The palette is assembled per scanline:

- entries 0–3 come from the sprite descriptor colors
- entries 4–11 are new color registers of the sprite plane
- entries 12–15 are the descriptor colors again, half-bright

Entry 0 stays transparent. So 1 bpp reaches entry 1, 2 bpp reaches 1–3, 3 bpp
1–7 and 4 bpp everything.

GOTCHA: This breaks existing programs. 1 bpp sprites now draw `color[1]`
and 2 bpp sprites need their flags byte and data layout regenerated.
`SPRITE_MASK_MULTICOLOR` stays as an alias for 2 bpp, so old sources recompile,
but the pixel data needs repacking.

The firmware has it, Emu follows it, and the `examples` got the new header
and shared palettes. Remember to update your `cgia.h`.
