---
title: SGU-1 Tech Demo 1
category: news
author: smokku
---

SGU-1 — Sound Generator Unit 1 is a new audio-synthesis hardware under development as part of the X65 Project.

A video demonstrating sound playback on X65 sound chip:  
SGU-1 — Sound Generator Unit 1.

Playing (heavily butchered) 6-channel chiptune  
by Zack Maxis (aka Manganoid)  
titled Mystery Cannon.

[![SGU-1 playing 6 channel SID](/media/2026-01-06-Um4VnszF-7s.jpg)](https://youtu.be/Um4VnszF-7s){:target="_blank"}

---

SGU-1 — Sound Generator Unit 1

is a new audio-synthesis hardware
under development as part of the X65 Project.

---

It is based on the tildearrow Sound Unit

fantasy sound chip from the Furnace chiptune tracker.

---

SGU-1 is implemented using an RP2350 microcontroller
paired with an audio CODEC chip.

Together they generate a stereo 48 kHz I²S stream,
which is converted to an analog stereo line-out signal.

---

![SGU-1_breadboard_prototype](/media/2026-01-06-SGU-1_breadboard_prototype.jpeg)

---

Contemporary audio-synthesis chips
with advanced features are no longer manufactured,

so creating our own solution was the only practical way
to bring such capabilities to the X65.

---

The six-channel chiptune you are hearing is
an excellent piece by Zack Maxis (aka Manganoid)
titled: Mystery Cannon.

In this tech-demo it is heavily butchered by a rough,
direct SID -> SGU-1 register translation.
It is intended purely as a technical proof-of-concept
for the work-in-progress hardware.

Do not evaluate Zack’s composition based on this demo.
Seek out and listen to the original SID version
to appreciate it properly.
