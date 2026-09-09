---
title: SGU Tracker export to X65
category: news
author: smokku
---

Music written in SGU Tracker can now be exported and played on X65.

The exporter saves the song as an `.sgm` module and can bundle it with a 6502
player in an autorun `.xex` file. Load the file on X65 or in Emu, and it starts
playing.

I used the Atari-style XEX block format already supported by both loaders.
The player is based on the GT2 player structure, with vibrato, pulse-width
modulation and pitch slides adapted from Rob Hubbard's player.

There is also a C reference player for comparing playback with the 6502 version.
Both players and the exporter follow the same SGM format specification, which
gives me a common reference when the results differ.
