---
title: The gang is coming
category: news
author: smokku
---

If you idle in BOOM!65 too long, somebody will come for you. You may recognise the cast.

I've added a hazard to the arena: a gang of ghosts. They don't show up for free
- they come when it is earned, they hunt you four different ways, and what they
touch dies. Blinky picks up pace as the arena wears down, and there is a siren
to let you know.

Faces are patched into the sprite frames as they
turn, and each ghost keeps the face the pack drew.

The interesting part is under the hood. Sprites reach the chip only
in the blanking now, via two descriptor pages. The vertical blank interrupt
only moves a pointer, so a face can never tear. Then a week of
profiling to see what every tick pays for: painting the status panel
a few fields at a time, spreading blasts over ticks and paying a late tick
back with a catch-up that draws nothing.
