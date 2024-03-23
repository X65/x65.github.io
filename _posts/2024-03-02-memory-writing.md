---
title: Memory writing over QPI
category: news
author: smokku
---

Memory writing works. 🎉

```console
]status
Picocomputer 65816
RIA Mar  2 2024 14:42:28
MEM0: 32Mb ISSI (4448700c29d5)
MEM1: 32Mb ISSI (44487007b15d)
MEM2: 32Mb ISSI (4448700d79d5)
MEM3: 32Mb ISSI (4448700b39d5)
USB: 0 devices
]0
0000 AA AE BA AA AE 2A 2A AA AA 2A 8A AA 28 2A AA 2A
]0 1 2 3 4
]0
0000 01 02 03 04 AE 2A 2A AA AA 2A 8A AA 28 2A AA 2A
]ff0000
FF0000 5D 55 55 55 55 15 D5 55 55 55 5D 55 55 55 55 55
]ff0000 1 2 3 4
]ff0000
FF0000 01 02 03 04 55 15 D5 55 55 55 5D 55 55 55 55 55
]█
```
