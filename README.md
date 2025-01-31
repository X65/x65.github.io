---
title: Home
---
<svg style="width:1.85em;height:1.85em;float:left;margin-right:0.5em;fill:currentColor;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235.819 235.773"><path d="M165.492 7.048c-16.248-14.57-43.279-4.818-52.19 13.454-10.116 16.001-8.32 42.216 10.532 50.876 18.315 7.35 37.94-6.207 46.686-21.96 7.339-13.25 6.75-31.817-5.028-42.37zm63.18 63.182c-14.394-15.734-41.212-11.141-54.123 4.247-12.08 10.946-17.712 32.592-4.87 45.065 17.472 16.707 47.899 8.356 60.208-10.625 7.766-11.31 8.454-28.25-1.214-38.687zM78.632 9.697C65.85-3.33 43.11.611 32.455 14.396 18.338 29.38 15.772 57.608 33.979 70.513c18.135 12.263 44.25.342 51.317-19.246 6.037-13.572 4.487-31.057-6.665-41.57zM226.003 157.1c-15.94-16.742-45.544-11.324-58.43 6.574-11.693 13.675-9.592 37.506 6.81 46.538 24.87 14.507 62.184-7.355 59.65-36.656-.793-6.158-3.773-11.951-8.03-16.456zm-95.201-56.465c-11.414-10.383-27.86-5.163-41.615-4.8-22.06 1.831-44.279 2.535-66.208 5.455-24.352 8.062-30.333 43.244-13.19 61.003 20.7 21.686 42.273 42.596 63.476 63.808 17.917 16.934 53.211 11.1 61.193-13.333 3.173-22.793 3.571-45.954 5.725-68.89-.273-11.979 4.865-25.47-3.01-36.019-1.738-2.742-4.231-4.825-6.371-7.224z" /></svg>

# X65

Modern 8-bit Microcomputer

## READY<br><blink>&#x2588;</blink>

[X65](https://github.com/X65) is an effort to build an 8-bit microcomputer for the modern era. It uses best of breed components and strives to maintain the 8-bit feeling while being usable for daily basis computing activities.

<a href="/timeline.html"><img src="/media/2024-10-17_board-vis.png" style="float: right;width:33%;"></a>

### Components

- CPU: WDC [65C816][1], ~6MHz
- RAM: 16MB [PSRAM][10]
- Video: [CGIA][2], DVI-D 480p, 384×240px
- Sound: Yamaha SD-1 [YMF825][3] + 2× [PWM][12], 2× RCA with [mixer][13]
- Input/Output:
  - [RP816-RIA][4]: USB mass storage, HID
  - [ESP32-C3][5]: Wi-Fi, BT, USB-UART
- Ports:
  - 6× [USB][6] port + 2× internal
  - 2× [DE-9 Joystick][7] port (SEGA wiring), [GPIO][11]
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
