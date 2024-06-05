---
title: HiRes mode implemented
category: news
author: smokku
---

Today I finalized HiRes graphics mode implementation.

This is akin to Commodore TED, where each 8x8 pixels cell can have 1 shared foreground and 1 background colour out of palette of 128 colours.

![X65 bitmap graphics test](/media/2024-05-24_raster-bars.jpeg)

Except in our case, the line height is configurable, so you can have 8x1 cells up to even 8x256px cells.

As a demo picture, I've converted ["The Mill" by Veto](https://csdb.dk/release/?id=101528):

![The Mill by Veto, converted to X65](/media/2024-05-29_the-mill-veto.jpeg)

As you can see, X65 is now capable of perfectly replicating Commodore 64 HiRes graphics mode.
(The difference between X65 palette of 128 colours and 16 colours of C64 is unnoticeable.)
