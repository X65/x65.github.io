---
title: New memory chips
category: news
author: smokku
---

The current limiting factor on how fast the CPU can run is the memory speed.

In order to provide full 16MB of memory to 65816 CPU in reasonable price,
X65 is using Serial PSRAM (Pseudo-Static RAM). 4x 4MB chips from ISSI: `IS66WVS4M8BLL-104NLI`.

These chips have a maximum clock frequency of 104MHz.
With SPI interface taking 12 CLK cycles for WRITE operation and 17 cycles for READ,
the maximum frequency the CPU could be running (assuming we do not loose any cycles in RP2040)
is ~6,18MHz. This is fine…

I've been looking for faster memories and finally I found ones!
There are 133MHz 8MB chips from ESP: `ESP-PSRAM64H`.
These are two times larger, so I will need only two chips, and even cheaper per-chip.

Chips arrived today and are working fine. 😁

```console
Picocomputer 65816
RIA Mar  6 2024 11:39:12
MEM0: 64Mb ESP (5310155392ca)
MEM0: 64Mb ESP (53101553a6c7)
USB: 0 devices
]
]0
000000 55 14 47 54 5D 55 74 51 55 55 56 55 55 E5 55 55
]0 0 1 2 3
]0
000000 00 01 02 03 5D 55 74 51 55 55 56 55 55 E5 55 55
]ff0000
FF0000 55 57 55 45 D5 D5 55 D5 55 75 45 7D 57 55 55 55
]ff0000 0 1 2 3
]ff0000
FF0000 00 01 02 03 D5 D5 55 D5 55 75 45 7D 57 55 55 55
]
]█
```
