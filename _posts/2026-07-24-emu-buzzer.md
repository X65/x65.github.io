---
title: Buzzer and volume in Emu
category: news
author: smokku
---

Emu now emulates the X65 buzzer, controlled through the RIA register at `$FFA8`.

The buzzer state is visible in the emulator interface.
Programs using the system beep can now be heard in Emu too.

While working on it, I added SGU-1 master volume sliders to the interface.

One detail to remember when writing a player: SGU-1 starts muted after reset.
The master volume register, `svc_master_vol`, defaults to zero, so software
needs to set it before any sound will come out.
