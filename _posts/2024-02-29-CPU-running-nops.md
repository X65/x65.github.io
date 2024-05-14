---
title: CPU is running NOPs
category: news
author: smokku
---

I needed to verify whether CPU bus interface is working properly,
so I wrote a some code, to dump consecutive CPU address reads to serial console.

Current RP2040 `bus` PIO program is hardcoded to feed NOP (`0xEA`) to CPU on every Read.

![CPU reading NOPs](/media/2024-02-29_reset_sequence.png)

As you can see, CPU is doing a RESET sequence, then reads RESET vector from `0xFFFC`
which is two NOPs: `0xEAEA`, so the next read is NOP from `0xEAEA`,
NOP from `0xEAEB`, NOP from `0xEAEC`, and so on…

![CPU reading NOPs](/media/2024-03-06_CPU_running_NOPs.png)

If you want to know what is going on with this NOP-feeding, please watch the video from Ben Eater, who does way better job of explaining this, than I could ever will: <https://youtu.be/LnzuMJLZRdU?t=1064>
