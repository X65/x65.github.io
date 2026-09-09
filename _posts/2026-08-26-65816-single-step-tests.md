---
title: 742,382 failures
category: news
author: smokku
---

Emu's 65816 core was passing the tests I had, so I added another inception level.

The first run reported **742,382 failures**. Well, we have *some* work to do…

[SingleStepTests/65816](https://github.com/SingleStepTests/65816) contains about
3 GB of test data: 512 files covering every opcode in native and emulation
modes, with 10,000 cases in each file. Each case describes an initial CPU
state, the expected bus cycles and the final register and memory values.

The failures exposed several bugs in the CPU core:

- `PLD` did not set the N and Z flags from the full 16-bit value.
- Several 65816 stack instructions incorrectly wrapped within page 1 in
  emulation mode.
- `JMP (a,x)` and `JSR (a,x)` marked pointer reads as program accesses.
- `WDM` did not consume its signature byte.
- Some internal cycles put the wrong address on the bus.

After fixing these, the count dropped to 16,262 failures, with 508 of the
512 files passing completely. The remaining differences involved status
timing in `REP`, `SEP` and `RTI`, and a direct-page wrapping case where the
test reference disagreed with the manual.

This huge test suite is downloaded separately with `tools/fetch-sst65816.sh`
for on-demand use.
For routine builds, I've also adapted
[gilyon's 65816 tests](https://github.com/gilyon/snes-tests) to run headless.
Its 1,610 tests cover every opcode except `STP` and `WAI`, in 8- and 16-bit
widths, and take about 15 ms.

That suite found two more wrapping errors, in `(d,x)` addressing and the stack
accesses of `JSR (a,x)`. These cases also disagree with SingleStepTests, so the
two suites need comparing with care.

I also fixed `WAI` wake-up behavior and added a regression test ROM for it.
