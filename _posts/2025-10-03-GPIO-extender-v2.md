---
title: New GPIO extender
category: news
author: smokku
---

I've replaced TI TCA6416A with NXP PCAL6416A.

The thing is, that TCA6416A will report IRQ whenever the input port change.
Does not matter whether you are interested or not.

It would be a pain to have to handle interrupts you never requested.

NXP extends TI design with Interrupt Mask registers.
You need to actually request interrupt signalling if you need it.  
This is a better design.

PCAL6416A extends TCA6416A with a few more features… 😁
and is pin-compatible and register-compatible.

![X65 DEV-board GPIO extender](/media/2025-10-03-GPIO-extender-v2.png)
