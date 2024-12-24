---
title: Monitor Console Revamp
category: news
author: smokku
---

While working on the <acronym title="Video Processing Unit">VPU</acronym> implementation,
I’ve somewhat neglected support for the monitor console.
Now I’ve brought it back, extending it to 96×30 characters with 256 colors support.

![Monitor Console in action](/media/2024-12-15_monitor-console.png)

This monitor is built into the machine, allowing users to load and update the firmware, install ROMs, and debug memory content. Normally, it isn't visible because the default ROM firmware starts automatically after boot. You can access it via a USB serial connection or by pressing `Ctrl-Alt-Del`.

![Monitor Console 256 colors](/media/2024-12-15_console-256.png)

The VTY implementation supports 256 colors, which aren’t currently in use but might prove useful in the future.

```
//    0-  7:  standard colors (ESC [ 30–37 m)
//    8- 15:  high intensity colors (ESC [ 90–97 m)
//   16-231:  6 × 6 × 6 cube (216 colors)
//  232-255:  grayscale from dark to light in 24 steps
```
