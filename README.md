---
title: X65 Project
---
<svg style="width:1.85em;height:1.85em;float:left;margin-right:0.5em;fill:currentColor;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235.819 235.773"><path d="M165.492 7.048c-16.248-14.57-43.279-4.818-52.19 13.454-10.116 16.001-8.32 42.216 10.532 50.876 18.315 7.35 37.94-6.207 46.686-21.96 7.339-13.25 6.75-31.817-5.028-42.37zm63.18 63.182c-14.394-15.734-41.212-11.141-54.123 4.247-12.08 10.946-17.712 32.592-4.87 45.065 17.472 16.707 47.899 8.356 60.208-10.625 7.766-11.31 8.454-28.25-1.214-38.687zM78.632 9.697C65.85-3.33 43.11.611 32.455 14.396 18.338 29.38 15.772 57.608 33.979 70.513c18.135 12.263 44.25.342 51.317-19.246 6.037-13.572 4.487-31.057-6.665-41.57zM226.003 157.1c-15.94-16.742-45.544-11.324-58.43 6.574-11.693 13.675-9.592 37.506 6.81 46.538 24.87 14.507 62.184-7.355 59.65-36.656-.793-6.158-3.773-11.951-8.03-16.456zm-95.201-56.465c-11.414-10.383-27.86-5.163-41.615-4.8-22.06 1.831-44.279 2.535-66.208 5.455-24.352 8.062-30.333 43.244-13.19 61.003 20.7 21.686 42.273 42.596 63.476 63.808 17.917 16.934 53.211 11.1 61.193-13.333 3.173-22.793 3.571-45.954 5.725-68.89-.273-11.979 4.865-25.47-3.01-36.019-1.738-2.742-4.231-4.825-6.371-7.224z" /></svg>

# X65

Modern 8-bit Computer

#### READY<br><blink>&#x2588;</blink>

[X65](https://github.com/X65) is an 8-bit microcomputer for the modern era.  
It blends the core principles of 8-bit computing with modern hardware components, making it practical and capable of handling everyday tasks.

<a href="/timeline.html"><img src="/media/2025-07-21_DEV-board.png" alt="X65 DEV-board" style="float:right;width:33%;"></a>

## Components

- **CPU**: WDC [65C816][1] @ [~1.83 MHz][17]
- **RAM**: 16MB [PSRAM][10] (flat, no banking)
- **Video**: [CGIA][2] (custom VPU chip)
  - **Output**: DVI-D, 384×240px @480p
  - 256-color [palette][18]
  - 4 graphics/sprite planes:
    - Background graphics Display List  
      *(ANTIC-style)*
    - 6 graphics modes  
      *(C64-style + HAM + MODE7)*
    - Hardware scrolling
    - 8 sprites (per plane), up to 64px wide;  
      built-in multiplexing
  - Three types of programmable raster interrupts
- **Audio**:
  - [SGU-1][3] (FM synth, PCM sample)
  - 2× RCA out, 2× RCA in, 2 Exp-in
    via TI [AIC3268][13] audio codec
- **I/O**:
  - [RP816-RIA][4]: USB mass storage, HID
  - [ESP32-C3][5]: Wi-Fi, Bluetooth, USB-UART
- **Ports & Expansion**:
  - 6× [USB][6] ports + 2× internal USB headers
  - 2× [DE-9 Joystick][7] / [GPIO][11] (via NXP [PCAL6416A][14])
  - **Expansion**: CPU bus, 4× IO_EN, 4× IRQ, Audio-In (mixed), I²C
- **Interrupt controller**: memory-mapped flags register

> Current [**Milestone 1** prototype][19] is available as a **DEV-board** for developers to experiment with.  
> Final hardware is going to be an all-in-one keyboard computer form factor.

## OS/816

X65 runs its own native operating system: **OS/816**.

OS/816 is built specifically for the 65C816 and leverages its capabilities.  
It provides:

- Simple multitasking environment
- Application framework
- Shell access
- Virtual screens
- Low-level programming interfaces

All without legacy overhead or unnecessary complexity.

The system is designed to be practical and transparent. You can write code close to the hardware or build higher-level tools as needed. It is easy to follow, easy to extend, and won't get in your way.

## Why X65?

We need ["Understandable Computers" to make computers understandable][16].

Simple machines with clear component purposes make the best teaching tools - not just for learning, but for growth. They invite curiosity, exploration, and insight in ways modern systems no longer do.

The X65 is also just *fun*.  
It is a machine you can truly get to know, shape, and expand.  
With much of its hardware defined in software, it is uniquely easy to modify and make your own. In an age of sealed boxes and hidden layers, X65 brings back the sense of agency we once had - the joy of a computer that answers to *you*.

[1]: https://en.wikipedia.org/wiki/WDC_65C816
[2]: https://github.com/X65/X65/wiki/CGIA
[3]: https://github.com/X65/emu/blob/main/src/chips/sgu1.h
[4]: https://picocomputer.github.io/ria.html
[5]: https://en.wikipedia.org/wiki/ESP32#ESP32-C3
[6]: https://en.wikipedia.org/wiki/USB
[7]: http://wiki.icomp.de/wiki/DE-9_Joystick
[10]: https://www.apmemory.com/products/psram-iot-ram/
[11]: https://en.wikipedia.org/wiki/General-purpose_input/output
[13]: https://www.ti.com/lit/ds/symlink/tlv320aic3268.pdf
[14]: https://www.nxp.com/docs/en/data-sheet/PCAL6416A.pdf
[16]: https://www.youtube.com/watch?v=2H2mh8wLXco
[17]: {% post_url 2024-03-07-VAB-memory-optimization %}
[18]: /media/2024-06-08_colors.html
[19]: <https://github.com/X65/schematic/blob/main/protoC/protoC.pdf>

## Contact

Join 💬 [Discord Community](https://discord.gg/TuTe3kymgy),  
Email 📨 [contact@x65.zone](mailto:contact@x65.zone?subject=X65)  
Call 🖀 [X65.zone BBS](https://bbs.x65.zone/).
