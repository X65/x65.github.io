---
title: SGU-1 repository and website
category: news
author: smokku
---

SGU-1 now has a repository of its own: <https://github.com/X65/SGU-1>{:target="_blank"}

The synthesis core used to live inside the X65 firmware repository. It is now
a shared Git submodule used by the firmware, Emu and SGU Tracker. Changes to
the chip can be made in one place, including its register definitions.

The README documents the register map at `$FEC0`–`$FEFF`, with the operator
and channel controls and service-bank selection. This brings the programming
reference closer to the code it describes.

There is also a dedicated website: <https://sgu-1.x65.zone/>{:target="_blank"}

The hardware is still an engineering prototype. Electrical limits and pin
assignments are not final, and revision 1 data is not intended for production
designs.
