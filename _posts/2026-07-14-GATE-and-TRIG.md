---
title: GATE and TRIG
category: news
author: smokku
---

SGU-1 got a separate TRIG control for restarting notes.

Previously, restarting a note required switching GATE off and on again.
The chip had to process at least one audio sample with GATE off, otherwise
it would miss the change. At 48 kHz, that means waiting about 20.8 µs.

The 6502 player used a delay loop for this. The problem is that X65's CPU clock
can be changed in firmware, so a delay calculated for one speed could be too
short at another… or too long, resulting in an audible sound break.

GATE now controls whether the note is held, and the new one-shot TRIG bit
explicitly restarts the envelope:

- GATE on during release starts an attack from the current envelope level.
- GATE on during attack, decay or sustain lets the note continue.
- GATE off starts the release.
- TRIG resets the envelope for a fresh attack.

Changing pitch while holding GATE allows legato playing. Cycling GATE starts
the attack from the remaining envelope level, similar to the SID.
TRIG allows for restarting the envelope, without the need to touch ADSR registers,
also to forcibly stop the audio (when bringing GATE down at the same moment).

The change is shared by the firmware, Emu and SGU Tracker. The player no longer
needs the delay loop, and the tracker no longer has to do the
gate-off-on dance.
