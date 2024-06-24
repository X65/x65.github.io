---
title: X65 says hello!
category: news
author: smokku
---

Hardware interface is implemented and validated. 🎉

I've [assembled][1] a simple 6502 program sending `Hello, World!` to UART (over USB)
and it works as expected.

[1]: https://www.masswerk.at/6502/assembler.html

![Hello World ASM](/media/2024-06-24_hello-world-asm.png)

```console
Picocomputer 65816
RIA Jun 24 2024 17:57:22

]0200 A2 00 BD 10 02 8D E1 FF E8 C9 00 D0 F5 8D F1 FF
]0210 48 65 6C 6C 6F 2C 20 57 6F 72 6C 64 21 0D 0A 00
]fffc 00 02
]reset
Hello, World!
]
```

This is the same example as in [RP6502 Ep4 - The Picocomputer says hello!](https://www.youtube.com/watch?v=uL8BL7ZDdlk).
