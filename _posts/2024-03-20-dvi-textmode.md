---
title: DVI Text mode
category: news
author: smokku
---

Working towards textmode terminal on [DVI][2] display…

![DVI text mode on monitor](/media/2024-03-20_DVI_TextMode.png)

Based on modified [colour_terminal][1] example.

Screen mode is fixed to `768x480@60` with horizontal line doubling. Effective resolution is `768x240px`, which will be used later for [CGIA][3] implementation. Colors are `RGB222`, which is more than enough for VGA-like terminal emulation.

Unfortunately, I see no way of implementing interlace mode, which would allow for full `640x480` CGIA resolution.
There is a [post on StackOverflow][4] with details. Maybe you could chip-in ¢2?

[1]: https://github.com/Wren6991/PicoDVI/blob/master/software/apps/colour_terminal/main.c
[2]: https://en.wikipedia.org/wiki/Digital_Visual_Interface
[3]: https://github.com/X65/X65/wiki/CGIA
[4]: https://stackoverflow.com/questions/78188354/picodvi-interlace-generation
