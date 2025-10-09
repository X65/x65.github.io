---
title: EXPansion port breakout
category: news
author: smokku
---

I needed something to hook into expansion port to test it.

![X65 DEV-board EXP port breakouts](/media/2025-09-29-EXP-boards.png)

![X65 DEV-board EXP port breakout](/media/2025-09-29-EXP-board.png)

![X65 DEV-board EXP port breakout board](/media/2025-10-05-EXP-breakout-board.png)

Used for early experiments with expanding core machine capabilities.

EXPansion port exposes the following functions:

- 8-bit data bus (D0-D7)
- 8-bit address bus (A0-A7)
- CPU Control signals:
  PHI2, /IRQB, /NMIB, /VAB, R/WB, /RESB, /ABORT, RDY, BE
- 4× I/O enable signals (IO0_EN-IO3_EN)
- 4× I/O interrupt signals (IO0_INT-IO3_INT)
- +5V, +3.3V and GND power supply
- I²C bus (SDA, SCL)
- UART (TX, RX)
- Audio output (MIX_OUT_L, MIX_OUT_R)
- Audio input (EXT_IN_L, EXT_IN_R, AUDIO_EXT3)
- RGB LED (WS2812B) data line

![X65 EXPansion port schematic](/media/2025-10-05_EXPansion-port-schematic.png)
