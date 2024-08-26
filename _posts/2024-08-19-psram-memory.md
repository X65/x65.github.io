---
title: RP2350 & PSRAM memory
category: news
author: smokku
---

Today, I received the RP2350 development board, so I've reworked one of X65 `protoA` boards
into a CPU breakout board and connected both on breadboard.

![protoA CPU breakout board](/media/2024-08-19_protoA-CPU-breakout-board.jpg)

Adapting build and code for new board was surprisingly straightforward.
It took off almost instantly (once I cleaned build dir from old stuff).

Integrating QPI PSRAM support was really equally seamless.
The PSRAM is mapped as regular ARM CPU-accessible memory,
allowing straightforward data access by simply pointing an `uint8_t[]` to a fixed address.
This memory is also cached, for faster access speeds.

The [`Hello, World!`][1] test worked flawlessly.

```console
]status
Picocomputer 65816
RIA 1c09c48+@main
RAM: 8MB
USB: 0 devices
]
]
]0200 A2 00 BD 10 02 8D E1 FF E8 C9 00 D0 F5 8D F1 FF
]0210 48 65 6C 6C 6F 2C 20 57 6F 72 6C 64 21 0D 0A 00
]fffc 00 02
]
]reset
starting
Hello, World!
```

[1]: https://x65.zone/news/2024/06/24/says-hello.html
