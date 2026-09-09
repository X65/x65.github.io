---
title: Emu command-line options
category: news
author: smokku
---

Emu got a new command-line parser.

It now supports long and short options, with a complete list available through
`emu --help`. The parser also has automated tests covering the options and
their default values.

The web version accepts the same options in the page URL. For example, this
loads Shadow Of The Beast with a CRT effect in fullscreen mode:

    emu.html?file=roms/SOTB.xex&crt=1,2,3&fullscreen

Windows builds also got fixes for path handling and now use `%APPDATA%`
for application settings.
