---
title: Memory reading over QPI
category: news
author: smokku
---

Memory reading works. 🎉

```console
]status
Picocomputer 65816
RIA Mar  1 2024 14:48:47
MEM0: 32Mb ISSI (4448700c29d5)
MEM1: 32Mb ISSI (444870075d9d)
MEM2: 32Mb ISSI (4448700d79d5)
MEM3: 32Mb ISSI (4448700b39d5)
USB: 0 devices
]0
0000 AA EB FE FE E2 70 AF AE 2A 8A AA 6C 23 BA 2E BE
]10
0010 EA 3A AE AA AE FE EE AB AA 0A 2A AE AF 0A AE AB
]10
0010 EA 3A AE AA AE FE EE AB AA 0A 2A AE AF 0A AE AB
]10
0010 EA 3A AE AA AE FE EE AB AA 0A 2A AE AF 0A AE AB
]ffff00
FFFF00 D4 02 28 55 5F 11 ED 95 9B 03 31 6E B5 41 53 57
]█
```

![PIO assembly](/media/2024-03-01_PIO_assembly.png)
