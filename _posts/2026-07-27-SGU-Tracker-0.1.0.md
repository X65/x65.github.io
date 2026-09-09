---
title: SGU Tracker 0.1.0
category: news
author: smokku
---

The tracker now has an official name and a versioning: **SGU Tracker 0.1.0**.

The font, mouse cursor and keyboard layouts are embedded in the executable.
There is no separate resource directory to install or configure, so the
program can be started from any directory.

Along with the default keyboard layout, it includes AZERTY, DVORAK, FT2,
QWERTZ and n00bstar layouts inherited from klystrack.

I've also moved the automated tests into CTest and added fuzz testing for the
importers. Feeding them malformed files already found a few cases where they
read past the end of the input.

And, of course, it has its own mascot icon. 😄
