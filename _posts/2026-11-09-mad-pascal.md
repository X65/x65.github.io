---
title: Mad-Pascal meets X65
category: news
author: zbyti
---

**Mad-Pascal** now has an **X65** target,

and resources are in: you can attach
binaries or assembler code and get a proper **segmented XEX** out of it.
RCDATA and RCASM both work, `$resource` lands in proper segments, and the prolog and
epilog write the header and the vector segment the way the machine expects.

So it is already usable - with two honest caveats. Keep the program under 64 KB
and stick to 65C02 for now, and you can start flying. The **X65 CGIA** register
and constant definitions are there in `lib/x65.pas`, with
`samples/x65/plasma.pas` using them.

The next tempting thing is hardware multiplication: X65 has it, and teaching
the compiler to use it instead of a software routine would be a nice win.

Do not expect the full library yet. **RTLIB is still empty** — no `@putchar`,
no `@clrscr`, no graphics, no sysutils — and many units simply do not exist,
because the target is still under development. Treat it as WIP, not as a fixed
contract. But the groundwork is laid, and the emulator already runs Pascal.

```sh
mp -target:x65 plasma.pas
mads plasma.a65 -x -i:$HOME/Tools/Mad-Pascal/base -o:plasma.xex
x65 plasma.xex
```
