---
title: Double-width and 80 columns text modes
category: news
author: smokku
---

CGIA now supports double-width text modes.

With the rewrite of text rendering modes, I've decided to implement support
for double-width non-multi-color text.

Multi-color text had the ability to make pixels doubled horizontally from
the beginning, to emulate familiar C64 rectangle pixels look.

It is also useful to have double-width text in normal text modes,
to emulate Atari8 style wide characters text modes, so I've added that.

![double-width text mode screenshot](/media/2025-11-12-DW_text.png)

All text modes support this.

![all text modes screenshot](/media/2025-11-12-MC_text.png)

While I was at it, I have created a demo of a neat possibility that non-double-width
multi-color modes offer - 80 columns text mode. In multi-color modes each pixel
takes 2 bits from data, so it creates 4 pixels per byte. This means that in text mode
we have 4x8 pixel cells - yielding exactly 80 columns on a 320 pixel wide screen.

With a proper font, the result looks quite readable:

![MODE0 screenshot](/media/2025-11-12-80-columns.png)

This runs on multicolor text mode, with 4x8 text cells,
but uses only 00 and 11 colors with 4x8 font.
Each character is a proper cell, with 1 byte per character code,
and its own color attributes cells, working just like normal text modes.
