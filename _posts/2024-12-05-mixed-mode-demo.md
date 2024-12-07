---
title: Mixed Modes Display List Demo
category: news
author: smokku
---

X65 Display List is soooo powerful.

[![Mixed Modes DL demo](/media/2024-12-05_mixed-mode-demo.jpg)](https://youtu.be/fsTFN2UXo_c)

Showcasing:

- split screen:
  - top part is MODE7 affine transform mode rotating demo pixmap
  - bottom part is 8 rows of MODE2 lines
- second background layer overlaying a HUD in MODE5 graphics

There is no CPU nor interrupts work involved here, to create visuals.
Everything is just Display List programming.

The only CPU work is in <acronym title="Vertical BLank interrupt">VBL</acronym> to change the MODE7 rotation vector and blink cursor.
