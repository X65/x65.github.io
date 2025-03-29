---
title: Switching from DVI-D to "The Other Connector"
category: news
author: smokku
---

After some research, I've decided to swap the DVI-D connector on the X65 board for a more commonly used HDMI-shaped connector. The reasoning is simple - DVI-D requires adapters and special cables, while the "other connector" is what most displays expect. No more messing around with dongles.

The HDMI connector and protocols are proprietary. You need to pay royalties to use them. That's why I designed X65 using a free DVI-D connector.
It can be connected to an HDMI monitor/TV through a simple passive cable (DVI-D signal is HDMI-compatible).

It turns out that if you just use a legally bought HDMI connector part and send only DVI-D TMDS streams over it, it is fine to use it without paying royalties. We cannot refer to it as the HDMI connector, use the HDMI logo branding, etc., or send HDMI-specific protocol IP over the wire.

But the licensing of the physical design of the connector is a case between the manufacturer of the connector and the HDMI consortium. It does not concern the user of the connector. We can just use standard HDMI-branded cables and plug them into the "shall not be named" port on the computer.

![X65 dev-board view](/media/2025-03-18_new-video-connector.png)

![X65 dev-board connectors](/media/2025-03-18_connectors.png)

Additionally, I looked into adding actual HDMI support with embedded audio. It is possible but not cheap. It would need:

- An HDMI/DVI receiver to convert DVI to parallel 24-bit RGB (~$10)
- An HDMI transmitter to repackage that into proper HDMI and mix with digital audio (~$7)
- An I²C ADC chip to sample analog audio and feed it into the transmitter (~$5)

That might be worth considering for a future "Plus" version of X65, especially if I decide to support 480i, which DVI doesn't handle.

There's also some work being done to get HDMI audio working with PicoDVI, which *might* be adaptable to X65's video pipeline. Interesting, but not a priority right now.
