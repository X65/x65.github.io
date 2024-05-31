---
title: VGA output
category: news
author: smokku
---

VGA output is working 😁

<video controls height="480"
  poster="/media/2024-03-14_VGA_output.png">
  <source src="/media/2024-03-14_VGA_output.webm" type="video/webm" />
  <source src="/media/2024-03-14_VGA_output.mp4" type="video/mp4" />
  Download the
  <a href="/media/2024-03-14_VGA_output.webm">WEBM</a>
  or
  <a href="/media/2024-03-14_VGA_output.mp4">MP4</a>
  video.
</video>

VGA output is realized using [pico_scanvideo library][1] from pico-extras.

Currently VGA-console like display is working and is displaying terminal window
in sync with serial console.

![X65 VGA](/media/2024-03-14_VGA_closeup.jpeg)

![X65 breadboard](/media/2024-03-14_board.png)

[1]: https://github.com/raspberrypi/pico-extras/tree/master/src/common/pico_scanvideo
