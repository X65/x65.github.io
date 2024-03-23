---
title: CPU is running NOPs
category: news
author: smokku
---

Current `bus` PIO program is hardcoded to feed NOP (`0xEA`) to CPU on every Read.

![CPU reading NOPs](/images/2024-03-06_CPU_running_NOPs.png)

As you can see, CPU is doing a RESET sequence, then reads RESET vector from `0xFFFC`
which is two NOPs: `0xEAEA`, so the next read is NOP from `0xEAEA`,
NOP from `0xEAEB`, NOP from `0xEAEC`, and so on…
