---
title: SGU Tracker in your browser
category: news
author: smokku
---

SGU Tracker is now available in the browser: <https://tracker.x65.zone/>{:target="_blank"}

The WebAssembly build runs the SGU-1 synthesis core in an AudioWorklet, on a
separate audio thread. This lets playback continue while the editor is drawing
or handling input.

Getting files to work took more effort. The tracker now has a virtual filesystem
shared by the desktop and browser builds, so the same importers can read local
files, browser storage and online archives.

In the browser's file dialog, `browser:/` holds songs saved in browser storage.
They remain there after reloading the page. `local:/` gives access to a folder
on your computer, selected through the dialog or dropped onto the page.
The folder is remembered between visits, though the browser may ask for access
again.

You can also browse music archives directly from the tracker:

- `vgmrips:/`: [vgmrips.net](https://vgmrips.net/), by system and sound chip
- `modland:/`: supported collections from [modland.com](https://modland.com/)
- `hvsc:/`: supported tunes from the [High Voltage SID Collection](https://www.hvsc.c64.org/)
- `reality:/`: Reality Productions' collection, including Reality AdLib Tracker modules
- `examples:/`: demo songs from Furnace, FamiTracker, GoatTracker, HivelyTracker,
  klystrack, AdLib Tracker II and Raster Music Tracker
- `opl:/` and `mutopia:/`: the OPL archive and the Mutopia Project

The desktop build also has `botb:/` for [Battle of the Bits](https://battleofthebits.com/).

Choose a supported file to import and listen to it on SGU-1. The `examples:/`
directory is a good place to start.

Links can open songs directly, too:

    https://tracker.x65.zone/?import=modland:/Ad%20Lib/Reality%20AdLib%20Tracker/Nula/minus.rad

Use **Copy Link** in an archive's file dialog to share a tune.

MIDI keyboards work through Web MIDI. Choose *Enable MIDI...* in the MIDI
settings to let the browser ask for device access.
