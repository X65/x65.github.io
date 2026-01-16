---
title: USB HID Keyboard Support
category: news
author: smokku
---

Added USB HID keyboard handling today.  
Uses the same mmap area as other HID devices.

Extremely simple. A direct mapping of HID keyboard codes to 256 bits in memory.
This gives us the whole keyboard state compacted to 64 bytes.  
As described at: <https://picocomputer.github.io/ria.html#keyboard>

Due to the fact we have 32 bytes available in the HID memory area,  
keyboard state is split into two addressable pages.

It makes the use of the interface very simple and efficient:

* one `BIT` instruction to check whether any key is pressed
* two instructions (`LDA`+`AND`) to check whether any particular key is pressed

Of course, it works in Emu too…  
<https://x65.zone/emu/?rom=roms/controller.xex#Emu>

![HID Keyboard test](/media/2026-01-15-HID_Keyboard_test.png)
