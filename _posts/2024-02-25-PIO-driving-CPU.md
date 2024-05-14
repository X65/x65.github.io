---
title: PIO is driving CPU
category: news
author: smokku
---

1/2 of memory emulation PIO programs done!
Pico is able to read A0-A23 address from CPU and feed it with NOPs.

![PIO driving CPU](/media/2024-02-25_PIO_driving_CPU.png)

There is a description of how it works in comments in
<https://github.com/X65/firmware/blob/5f37dface8/src/ria/sys/mem.pio>

![X65 breadboard](/media/2024-02-25_board.png)
