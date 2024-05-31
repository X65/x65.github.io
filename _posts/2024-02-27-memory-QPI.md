---
title: Memory communication over QPI
category: news
author: smokku
---

Memory communication is working again.
This time over [QPI](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface#QPI/SQI).

```console
Picocomputer 6502
RIA Feb 26 2024 23:55:03

]status
Picocomputer 6502
RIA Feb 26 2024 23:55:03
MEM0: 32Mb ISSI
MEM1: 32Mb ISSI
MEM2: 32Mb ISSI
MEM3: 32Mb ISSI
USB: 0 devices
```

This gives 4x (Quad) memory speed boost. This is crucial as the memory access time
is the main factor in how fast the CPU can run.
