---
title: DVI Text Console
category: news
author: smokku
---

Done rewriting text mode console to [DVI][1] output.

![DVI console on monitor](/media/2024-03-21_DVI_Console.png)

Replaced demo font with [Atari ST 8x8][2] font, which is being rendered as 8×16, due to raster line doubling on DVI output. Looks amazing. 🎉

This will be the default font for [CGIA][3] text mode too.
As it works so good stretched to 1×2 pixels, we can have one font for both 40×30 and 80×30 text modes.

[1]: https://en.wikipedia.org/wiki/Digital_Visual_Interface
[2]: https://en.wikipedia.org/wiki/Atari_ST_character_set
[3]: https://github.com/X65/X65/wiki/CGIA
