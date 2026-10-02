---
title: POKEY high-pass voices
category: news
author: smokku
---

Remember **SGU-1 does POKEY**? Well, I haven't been
listening carefully enough.

POKEY can high-pass filter one channel with another, and many Atari tunes use it
for that crispy sound. SGU Tracker now models those voices, together with
the proper distortion mapping, track routing and pulse widths, across
CMC, MPT, RMT and TMC imports.

A few drums were wrong too. The duty cycle wasn't applied to every voice, and
the MPT accent 2 didn't take its pitch from the note. Fixed.

RMT volume slides keep their decay in the volume column now, instead of
dropping it on the floor.

New in the test corpus: *Lasermania* by Janusz Pelc. If your ears bleed,
it is working.
