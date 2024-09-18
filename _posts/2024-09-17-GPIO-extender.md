---
title: GPIO extender
category: news
author: smokku
---

A prototype for the I2C GPIO extender is working fine.

![I2C GPIO extender](/media/2024-09-17_GPIO-extender.png)

I've hardwired GPA to `10101010`/`aaH` (GPB is floating).

Unfortunately, the chip does not work when supplied with a 5V VDD.
The 3.3V logic driving the I2C bus is not enough to register at the 5V chip.

After reducing VDD to 3.3V, the chip works fine.
I am able to dump its registers without issues:

```console
MCP registers dump
IODIRA          ff
IODIRB          ff
IPOLA           00
IPOLB           00
GPINTENA        00
GPINTENB        00
DEFVALA         00
DEFVALB         00
INTCONA         00
INTCONB         00
IOCONA          00
IOCONB          00
GPPUA           00
GPPUB           00
INTFA           00
INTFB           00
INTCAPA         00
INTCAPB         00
GPIOA           aa
GPIOB           81
OLATA           00
OLATB           00
```

![DE-9 joysticks schematic](/media/2024-09-17_joy-schematic.png)
