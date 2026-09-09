---
title: Importing Furnace modules
category: news
author: smokku
---

SGU Tracker can now import [Furnace](https://github.com/tildearrow/furnace)
modules (`.fur`).

A Furnace song can use several sound chips at once. Converting one for SGU-1
means fitting its instruments and channels into a single chip with nine
channels available.

The importer converts instruments, macros, samples and wavetables, along with
stereo placement and effects. When a song uses more than nine channels, it
prioritizes the parts carrying the music and reduces doubled voices.

Furnace's timing and effect behavior need care too, including speed patterns,
continuous effects and relative pitch macros. Recorded playback baselines
help catch changes that affect how imported songs sound.
