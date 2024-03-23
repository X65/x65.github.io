---
title: CPU is running
category: news
author: smokku
---

I've [assembled][1] a short program looping on STA instruction,
put it in `0000` address using monitor,
set RESET Vector to `0000` and started 65816 CPU…

[1]: https://www.masswerk.at/6502/assembler.html

```nasm
0000  8D 34 12                   STA $1234
0003  4C 00 00                   JMP $0000
```

```console
Picocomputer 65816
RIA Mar 10 2024 14:49:28

]0000 8D 34 12 4C 00 00
]fffc 00 00
]0000
000000 8D 34 12 4C 00 00 66 77 88 99 AA BB CC DD EE FF
]fffc
00FFFC 00 00 00 00
]reset
starting
CPU: 0x00FFFF R
CPU: 0x0001D4 R
CPU: 0x0001D3 R
CPU: 0x0001D2 R
CPU: 0x00FFFC R
CPU: 0x00FFFD R
CPU: 0x000000 R
CPU: 0x000001 R
CPU: 0x000002 R
CPU: 0x001234 w
CPU: 0x000003 R
CPU: 0x000004 R
CPU: 0x000005 R
CPU: 0x000000 R
CPU: 0x000001 R
CPU: 0x000002 R
CPU: 0x001234 w
CPU: 0x000003 R
CPU: 0x000004 R
CPU: 0x000005 R
```

As you can see the processor did the proper RESET sequence (reading some "random" memory addresses),
then `R`ead the RESET Vector (`0000`) from address `FFFC-FFFD`,
then `R`ead the `STA $1234` instruction from addresses `0000-0002`,
then did a `W`rite to address `1234`, next `R`ead `JMP $0000` instruction from addresses `0003-0005`
and looped back to `R`eading from `0000`. ➿

RIA memory emulation code is done! 🎉
