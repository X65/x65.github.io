---
title: Home
---
<svg style="width:1.85em;height:1.85em;float:left;margin-right:0.5em;fill:currentColor;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235.819 235.774"><path d="M575.221 367.229c-16.248-14.57-43.278-4.819-52.19 13.453-10.116 16.002-8.32 42.216 10.532 50.877 18.316 7.35 37.941-6.207 46.687-21.96 7.339-13.25 6.75-31.818-5.029-42.37zm63.181 63.181c-14.394-15.733-41.212-11.14-54.123 4.247-12.08 10.947-17.713 32.592-4.87 45.065 17.472 16.708 47.898 8.356 60.208-10.625 7.766-11.31 8.454-28.249-1.215-38.687zM488.36 369.878c-12.78-13.029-35.52-9.087-46.176 4.698-14.117 14.985-16.682 43.212 1.525 56.117 18.134 12.263 44.25.342 51.317-19.246 6.037-13.572 4.486-31.057-6.666-41.57zM635.733 517.28c-15.941-16.743-45.545-11.325-58.43 6.574-11.693 13.675-9.593 37.505 6.81 46.537 24.87 14.507 62.183-7.355 59.65-36.655-.794-6.158-3.774-11.952-8.03-16.456zm-95.202-56.465c-11.414-10.384-27.86-5.164-41.614-4.8-22.06 1.83-44.28 2.534-66.208 5.454-24.352 8.062-30.334 43.244-13.19 61.003 20.699 21.687 42.272 42.596 63.476 63.808 17.916 16.935 53.21 11.1 61.192-13.333 3.174-22.793 3.572-45.954 5.725-68.89-.272-11.979 4.865-25.47-3.01-36.018-1.738-2.743-4.23-4.826-6.37-7.224z" transform="translate(-409.73 -360.18)"/></svg>

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
[10]: https://www.apmemory.com/products/psram-iot-ram/
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
