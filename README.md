---
title: Home
---
# X65

Modern 8-bit Microcomputer

## READY<br><blink>&#x2588;</blink>

[X65](https://github.com/X65) is an effort to build an 8-bit microcomputer for the modern era. It uses best of breed components and strives to maintain the 8-bit feeling while being usable for daily basis computing activities.

<a href="/timeline.html"><img src="/media/2024-09-17_board.png" style="float: right;width:33%;"/></a>

### Components

- CPU: WDC [65C816][1], ~6MHz
- RAM: 16MB [PSRAM][10]
- Video: [CGIA][2], DVI-D
- Sound: Yamaha SD-1 [YMF825][3] + 2x [PWM][12], 2xRCA with [mixer][13]
- Input/Output:
  - [RP816-RIA][4]: USB mass storage, HID
  - [ESP32-C3][5]: Wi-Fi, BT, USB-UART
- Ports:
  - 6x [USB][6] port + 2x internal
  - 2x [DE-9 Joystick][7] port (SEGA wiring), [GPIO][11]
  - Expansion: Full CPU bus, Audio-In, I2C

The hardware is based on [Picocomputer 6502][8] and [Neo6502][9] designs
providing implementation of non-existing chips and glue to modern digital interfaces (USB, DVI).

[1]: https://en.wikipedia.org/wiki/WDC_65C816
[2]: https://github.com/X65/X65/wiki/CGIA
[3]: https://www.youtube.com/watch?v=BEgAx0jngKQ
[4]: https://picocomputer.github.io/ria.html
[5]: https://en.wikipedia.org/wiki/ESP32#ESP32-C3
[6]: https://en.wikipedia.org/wiki/USB
[7]: http://wiki.icomp.de/wiki/DE-9_Joystick
[8]: https://picocomputer.github.io
[9]: https://neo6502.com
[10]: https://www.infineon.com/cms/en/product/memories/psram-pseudostatic-dram/s70kl1282gabhv020/
[11]: https://en.wikipedia.org/wiki/General-purpose_input/output
[12]: https://en.wikipedia.org/wiki/Pulse-width_modulation
[13]: https://www.rohm.com/products/audio-video/audio-processors/analog/bd3461fs-product

## Why?

Because we need ["Understandable Computers" to make computers understandable](https://www.youtube.com/watch?v=2H2mh8wLXco).

> It's like our entire technology subculture looked up and said "HOLY CRAP WE ARE DROWNING IN COMPLEXITY!"<br>
> Remember when we WEREN'T? Let's go play with THAT stuff!<br>
> -- Feoh

## Contact

Login to [X65.zone BBS](https://bbs.x65.zone/),
write to: [contact@x65.zone](mailto:contact@x65.zone?subject=X65)
or [join Discord](https://discord.gg/TuTe3kymgy) chat.
