---
title: Buzzer is back!
category: news
author: smokku
---

ESP32-C3 chip had one GPIO pin left unused,
so I've decided to add piezoelectric buzzer to X65 DEV-boards.

To drive it, we have a new "AT" command: `AT+BUZZ=...`

![X65 DEV-board buzzer](/media/2025-09-30-buzzer.png)

This restores classic "system beep" functionality on X65.
