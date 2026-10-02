---
title: Imports that keep in tune
category: news
author: smokku
---

The jukebox was a great stress test for the importers. Listening to hundreds of
tunes in a row finds things that a handful of favourites never do.

**Rob Hubbard** SIDs got the most love. The importer no longer walks the
player by its driver name - it finds each routine by its opcode signature and
reads the data from the operands. Init is walked statically, so the tempo
cell and the track pointers are read as init left them. I swept every Hubbard
`.sid` on HVSC against its own 6502: 150 of 213 builds are within 2% of the
original tempo, up from 118. For 19 files the walk can't be followed, so they
refuse to import rather than play wrong.

**VGM** rips had notes drifting. The YM2151 tunes in the playlist played 13.6%
of their notes more than 50 cents out. Now 0.0%. Chip volumes from the VGM
extra header are applied as balance, PSG envelopes are no longer applied
twice, and SegaPCM channels parked at zero volume are ignored.

Smaller stuff: volume fades on A2M, RAD and `.kt` slide on the row's first tick,
instruments without a sample stay silent in MOD/XM/S3M/IT, and the VU meters
follow the live `VOL` register.
