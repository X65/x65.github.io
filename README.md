---
title: X65 - Modern 8-bit microcomputer
---
# X65

Modern 8-bit microcomputer

## READY<br><blink>&#x2588;</blink>

[X65](https://github.com/X65) is an effort to build an 8-bit microcomputer for the modern era. It uses best of breed components and strives to keep 8-bit feeling, while being usable for daily basis computing activities.

<img src="/images/2024-05-11_board.jpg" style="float: right;width:33%;"/>

### Components

- CPU: WDC [65C816][1], ~6MHz
- RAM: 16MB [SPI PSRAM][10]
- Video: [CGIA][2], DVI-D
- Sound: Yamaha SD-1 [YMF825][3], Mono, 2xRCA
- Input/Output:
  - [RP816-RIA][4]: USB mass storage, HID, UART
  - [ESP32-C3][5]: Wi-Fi, BT, [GPIO][11]
- Ports:
  - 6x [USB][6] port + 2x internal
  - 2x [DE-9 Joystick][7] port (SEGA wiring)

Hardware is based on [Picocomputer 6502][8] and [Neo6502][9] design providing implementation of non-existing chips and glue to modern digital interfaces (USB, DVI).

[1]: https://en.wikipedia.org/wiki/WDC_65C816
[2]: https://github.com/X65/X65/wiki/CGIA
[3]: https://www.youtube.com/watch?v=BEgAx0jngKQ
[4]: https://picocomputer.github.io/ria.html
[5]: https://en.wikipedia.org/wiki/ESP32#ESP32-C3
[6]: https://en.wikipedia.org/wiki/USB
[7]: http://wiki.icomp.de/wiki/DE-9_Joystick
[8]: https://picocomputer.github.io
[9]: https://neo6502.com
[10]: https://www.espressif.com.cn/sites/default/files/documentation/esp-psram64_esp-psram64h_datasheet_en.pdf
[11]: https://en.wikipedia.org/wiki/General-purpose_input/output

## Why?

Because we need ["Understandable Computers" to make computers understandable](https://www.youtube.com/watch?v=2H2mh8wLXco).

> It's like our entire technology subculture looked up and said "HOLY CRAP WE ARE DROWNING IN COMPLEXITY!"<br>
> Remember when we WEREN'T? Let's go play with THAT stuff!<br>
> -- Feoh

## Contact

Login to [X65.zone BBS](https://bbs.x65.zone/),
write to: [contact@x65.zone](mailto:contact@x65.zone?subject=X65)
or [join Discord](https://discord.gg/TuTe3kymgy) chat.
