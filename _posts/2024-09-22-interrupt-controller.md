---
title: Interrupt Controller
category: news
author: smokku
---

It's time to manage interrupt sources.

We have several interrupt sources in the machine:

- CGIA <acronym title="Display List Interrupt">DLI</acronym> and <acronym title="Vertical BLank interrupt">VBL</acronym>
- Yamaha SD-1 IRQ
- GPIO extender INTA (port A) and INTB (port B)
- 4x IO area on EXTension bus

VBL is traditionally directly connected to NMIB on the CPU, so we have that covered.

We are left with DLI, SD-1 IRQ, INTA, INTB, and 4 IO interrupts.
Eight interrupt sources might get a bit difficult to manage in software.
Also, not every interrupt source provides open-drain mode, so there is a need for some logic chip (8-input AND) to combine them.

If we need a dedicated chip to handle interrupt signals, we might as well have a proper interrupt controller.
There were dedicated chips designed for this purpose, but they are no longer produced.
Fortunately, there is an I2C I/O extender that can be used as an interrupt controller: [PCF8574A][1].

[1]: https://www.ti.com/lit/ds/symlink/pcf8574a.pdf

![Interrupt Controller](/media/2024-09-22_interrupt-controller.png)

If any of the I/O extender pins change state, the chip will signal an interrupt.
Then the CPU needs to read the input register to check which of the devices is signaling an interrupt.
This will also clear the extender interrupt line, just like a dedicated interrupt controller.
We will simply ignore the possibility of setting the extender lines as outputs.
