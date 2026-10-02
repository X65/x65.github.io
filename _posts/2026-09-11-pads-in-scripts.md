---
title: Fifteen gamepads and a keyboard in Emu scripts
category: news
author: smokku
---

Emu scripts can now press buttons on more than one joystick.

Until now the `joy` verb reached joystick 1 and nothing else. Anything with more
than two players lives on the USB HID gamepads, and those were fed only by
real SDL devices, so a four-player game was impossible to test headlessly.
Not anymore:

```text
pad 3 right a
run 30
pad 3 off
key "x"
```

- `pad <1..15>` injects a gamepad report into a slot, analog sticks included.
  `pad <n> off` lets go and hands the slot back to a real device, if any.
- `joy` can drive either DE-9 port and names the buttons A, B, X and Y.
- `key` types on the keyboard.

Fifteen is not a random number. It is all that fits into the selector nibble
of the HID register window. The status line now shows the merged pad state,
so you can see what the machine sees.

In the browser, gamepads are now read raw, the way the firmware reads them.
Beware the browser's privacy gate: a page doesn't see a pad until you press
a button on it.

Also in this batch: a custom X65 mouse cursor, the screensaver is inhibited
while in fullscreen, and AudioWorklet failures are reported as suspended audio
instead of silence.

And `shot` and `crc` now capture the frame as displayed, not the raw raster.
