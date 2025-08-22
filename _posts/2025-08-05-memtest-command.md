---
title: MEMTEST command
category: news
author: smokku
---

I was experiencing weird crashes when testing software built for 65816.  
It turned out that memory values were changing under certain conditions.

Apparently, when I overclocked the RP2350 CPU to 366 MHz, the delays for PSRAM memory timings
are not computed correctly anymore. In order to aid tweaking the parameters,
I've added a MEMTEST command which… tests all PSRAM memory in both banks.

```console
X65 microcomputer
RIA 7752f28+@main

]memtest
Buffer size: 65536 bytes
SRAM buffer random filled in 21622 us

------- PSRAM BANK0 -------
PSRAM size: 8388608 bytes
PSRAM read ID: 0d 5d 53 12 f7 b6 3c 85

SRAM -> SRAM copied in 401 us, 24 ns/word
Flash(cached) -> SRAM copied in 1631 us, 99 ns/word
Flash(no cache) -> SRAM copied in 1681 us, 102 ns/word
SRAM -> PSRAM(cached) copied in 4550 us, 277 ns/word
SRAM -> PSRAM(no cache) copied in 1547 us, 94 ns/word
PSRAM(cached) -> SRAM copied in 1674 us, 102 ns/word
PSRAM(no cache) -> SRAM copied in 1757 us, 107 ns/word
PSRAM(cached) -> PSRAM(cached) copied in 10393 us, 634 ns/word
PSRAM(no cache) -> PSRAM(no cache) copied in 8004 us, 488 ns/word

PSRAM data block testing - 512 data blocks
Data blocks written
....................................................
Test Run: 512, Passed: 512, Failed: 0

------- PSRAM BANK1 -------
PSRAM size: 8388608 bytes
PSRAM read ID: 0d 5d 53 12 f7 b4 3c 9e

SRAM -> SRAM copied in 400 us, 24 ns/word
Flash(cached) -> SRAM copied in 1631 us, 99 ns/word
Flash(no cache) -> SRAM copied in 1681 us, 102 ns/word
SRAM -> PSRAM(cached) copied in 4548 us, 277 ns/word
SRAM -> PSRAM(no cache) copied in 1548 us, 94 ns/word
PSRAM(cached) -> SRAM copied in 1675 us, 102 ns/word
PSRAM(no cache) -> SRAM copied in 1757 us, 107 ns/word
PSRAM(cached) -> PSRAM(cached) copied in 10386 us, 633 ns/word
PSRAM(no cache) -> PSRAM(no cache) copied in 8003 us, 488 ns/word

PSRAM data block testing - 512 data blocks
Data blocks written
....................................................
Test Run: 512, Passed: 512, Failed: 0
]
```
