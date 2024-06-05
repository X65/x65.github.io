---
title: Display List is working
category: news
author: smokku
---

So far I've been working on a hardcoded display mode handling, during development of VPU firmware.
Today I implemented ANTIC-like Display List.

For now with blank line and Mode3 instructions only, but it allows to configure and display bitmap mode like on an Atari8 machine.

![hardcoded MODE3 display list](/media/2024-06-02_display-list.png)

(Until I move to a board with memory chips, it is still hardcoded in Pico memory.)

Here's a test picture generated using above display list code (and bitmap+color data):

![The Mill by Veto, converted to X65](/media/2024-06-02_veto-the_mill.png)

With a DL modified with empty-lines instructions, to create a simple demo-like effect:

![display list generated empty lines during display](/media/2024-06-02_display-list-effect.jpeg)

I've scratched most of ANTIC modes and have only 6 Commodore_TED-like modes + two high-resolution special modes.

This allows me to have some more special DL instructions. I've used 5 of 8 already and have place for 3 more. Any suggestions?
