---
title: CPU bus and Memory decoders
category: news
author: smokku
---

CPU bus and Memory <acronym title="Chip Enable">CE</acronym> signals are now driven
using 2->4 decoders.

![X65 breadboard](/images/2024-02-18_board.jpg)

Top-left is the CD74HC139E dual 2->4 dekoder, that is used to select one of the four 4MB memory banks below, and one of the three latches (on the right) multiplexing address-bus and data-bus. This frees 3 GPIO pins.
