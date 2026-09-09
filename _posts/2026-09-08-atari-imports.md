---
title: SGU-1 does POKEY
category: news
author: smokku
---

<a href="/emu/?rom=roms/Draconus.xex#Emu"><img src="/emu/roms/Draconus.png" style="float: right;height:150px;" alt="Draconus music demo in Emu" title="Draconus by Adam Gilmore, running on SGU-1"/></a>
Oh, the iconic **Draconus** tune…

Adam Gilmore wrote it for the Atari 8-bit. You can now listen to it on X65.

I've spent the last couple of days implementing Atari music imports in SGU Tracker.
POKEY's four channels can use different clocks, be paired together and apply
high-pass filtering. This is not straightforward to translate for FM synthesis.

The importer reads music from:

- Raster Music Tracker
- Chaos Music Composer
- Music ProTracker, including digi samples
- Theta Music Composer 1.x and 2.x
- Adam Gilmore's player

Each player needs its own data decoder. Some even set the playback rate in
the player code, so the song data alone is not enough to get the tempo right.

Additionally, the [Atari SAP Music Archive](https://asma.atari.org/) is available as `asma:/`
in the file dialog. It lists the SAP files that pass an import check, along
with the archive's standalone RMT modules.

Try it in your browser: <https://tracker.x65.zone/>{:target="_blank"}
