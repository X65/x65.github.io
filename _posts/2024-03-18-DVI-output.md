---
title: DVI output
category: news
author: smokku
---

DVI (HDMI) output is working 😁

![DVI output](/media/2024-03-18_DVI_output.png)

I've connected an HDMI breakout board and compiled [PicoDVI][1] example code
not really hoping that such a crude hack would work. It turns out DVI signal
is really resilient to borked connection and it worked fine. 🙀

Let's start experimenting whether it is usable together with VGA signal generation.

![X65 breadboard](/media/2024-03-18_board.png)

[1]: https://github.com/Wren6991/PicoDVI
