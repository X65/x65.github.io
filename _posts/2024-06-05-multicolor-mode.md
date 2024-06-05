---
title: MultiColor mode implemented
category: news
author: smokku
---

Woohoo!!! 🎉
I've just finished multi-color modes implementation.

The demo picture below is a conversion of [Carrion's "One Zak And His Kracken"][1] for Commodore Plus/4.

![One Zak And His Kracken by Carrion, converted to X65](/media/2024-06-05_carrion-One_Zak_And_His_Kracken.png)

There is a bit of colour artefacting, as I did not implement yet a register-set instruction for my DisplayList, so I cannot change shared colour every raster line. yet…

It still looks awesome, and there is no CPU work involved, to emulate FLI mode. Just a row/colour cell configured to 1 raster height, proper display list (240x MODE7 line) and a bunch of bitmap+colour data in memory.

[1]: https://plus4world.powweb.com/software/One_Zak_And_His_Kracken
