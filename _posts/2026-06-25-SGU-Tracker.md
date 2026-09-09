---
title: A tracker for SGU-1
category: news
author: smokku
---

SGU-1 is getting a dedicated music tracker.

The Furnace port was useful for bringup of the chip, but I wanted a dedicated
editor built around SGU-1's own instruments and registers.

As a starting point, I chose [klystrack](https://github.com/kometbomb/klystrack)
by Tero Lindeman, through LTVA's [klystrack-plus](https://github.com/LTVA1/klystrack)
fork. I kept the pattern editor, workflow and importers, then replaced the
sound engine and the graphical interface.

The new interface is a GPU-rendered character grid with 256 colors and a custom
font, emulating the 96-column text mode of the X65.

The instrument editor exposes all four operators, with a routing diagram and
an ADSR envelope graph. Filters and hardware sweeps have their own controls,
and the pattern volume column controls the SGU-1 channel volume directly.

MOD sample playback works too. The samples are fitted into SGU-1's 64 kB
PCM memory, downsampling when necessary.
