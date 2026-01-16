---
title: USB HID Device Support
category: news
author: smokku
---

USB HID device support has landed in X65 firmware.

Video demonstrating testing HID gamepad support with an expanded test application:

[![Testing HID GamePads](/media/2026-01-13-HID_GamePad_08bnaRSnBZs.jpg)](https://youtu.be/08bnaRSnBZs){:target="_blank"}

Memory mapped to `$FFB0`-`$FFBF`

![HID devices memory map](/media/2026-01-13-HID_MMAP.png)

Writing to `$FFB0` selects the device.
The memory layout of exposed data is documented here: <https://picocomputer.github.io/ria.html#gamepads>

I really like how it turned out.  
Extremely ez to access all devices.

The idea of the 0th merged device is that all connected controllers (1st, 2nd, and so on…) contribute to the 0th controller.
So if you are doing a single-player game, you just use the 0th merged controller
and the player can play using any controller.  
When you are doing multiplayer, you need to scan particular controllers
and map buttons to players accordingly.

It is implemented in Emu and works in the browser too.  
<https://x65.zone/emu/?rom=roms/controller.xex#Emu>

What's wild is that it uses literally the same code that is running on Raspberry Pico
to provide the 65816 CPU with memory-mapped data, just sourcing keypress events differently:
`libusb` or *Web Gamepad API*, respectively.

I've also updated the digital DE-9 joystick support.  
It now supports 4 buttons.

* Joy: `Arrow-Keys` / `WSAD`
* Btn: `ZXCV` / `JKL;`

You need to enable these in the menu though…

![4 button joystick test](/media/2026-01-13-Digital_4_buttons.png)
