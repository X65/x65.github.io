---
title: protoA board arrived
category: news
author: smokku
---

The protoboards arrived! 🎉

The quality of boards is excellent, as expected of [PCBWay](https://www.pcbway.com/). 🦾

![protoA board PCBs](/media/2024-05-06_protoA.png)

The obvious hardware bug is glaring… 🤦‍♂️ Oh well… I can work around.<br>
I wonder can you spot it?

After finishing the assembly of THT components, the board looks as expected.
Let's see how it works.

![protoA board](/media/2024-05-08_protoA_1.png)

![protoA board](/media/2024-05-08_protoA_3.png)

Testing reveals I can run memory at 1/4 of expected 133MHz. 😥
I am still experiencing QPI CLK ringing, causing memory reads to skip nybbles.
This is frustrating. Either I am missing something, or it cannot be done.
On the other hand, the second Pi Pico is able to drive HDMI screen at 266MHz just fine.
I guess the next proto board will need to have RP2040 MPU on-board and memory chips REALLY close.

The second issue appears after running [test program]({% post_url 2024-03-10-CPU-running %}).

```console
00FFFC 00 00 B7 62
]reset
starting
CPU: 0xFFFEFF R
CPU: 0x0100FF R
CPU: 0x0100FE R
CPU: 0x0100FD R
CPU: 0xFF00FC R
CPU: 0xFF00FD R
CPU: 0x000000 R
CPU: 0x000001 R
CPU: 0x0100FC w
CPU: 0x0100FB w
CPU: 0x0100FA w
CPU: 0xFF00FE R
CPU: 0xFF00FF R
CPU: 0x000000 R
CPU: 0x000001 R
CPU: 0x0100F9 w
CPU: 0x0100F8 w
CPU: 0x0100F7 w
CPU: 0xFF00FE R
CPU: 0xFF00FF R
```

The second and third bytes of address are swapped. Quick look at the schematic reveals the issue.

![protoA CE reversed BUG](/media/2024-05-08_protoA_BE_bug.png)

BE0 and BE1 got connected reversed. Who designs symbols like THIS??!

Simple workaround in software does the trick. I can run BUS PIO as 1/3 of Pico's 266MHz clock.
If I go faster, the latches are to slow to provide stable Address/Data Bus reading.
This may need more tuning on the final board.

Overall I am a bit disappointed, but this board should unblock CGIA development.
Quick calculation in head shows it should be able to drive enough memory read bandwidth
to feed video signal generation in real-time.
