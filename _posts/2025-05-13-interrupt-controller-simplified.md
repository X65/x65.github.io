---
title: Simplified Interrupt Controller
category: news
author: smokku
---

The Interrupt Controller got significantly simplified.

@willy on Discord noticed that my design of using I²C GPIO extender chips as the interrupt controller
might be a bad idea. The I²C bus, even running at 400 kHz, is way too slow to react as a memory-mapped device.

This might work for write-mostly devices like the Audio Mixer we use, as writes can be fire'n'forget,
but waiting for such a slow read is unacceptable for interrupt latency.

I've decided to rethink and really simplify interrupt handling.
Having two places to ACK interrupts (source + controller) was getting annoying already.

The current design consists of simply a NAND gate joining all the signals,
and yet another bus transceiver to read all interrupt sources in one go.

![simplified interrupt controller](/media/2025-05-13_interrupt-controller.png)

Well… I guess there is not much of a "controlling" aspect left. No masking, no ACKing.
The advantage is that it is really simple to use though.
