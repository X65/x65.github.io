---
title: PCM out, DAC in
category: news
author: smokku
---

I've dropped the PCM channels and integrated the SGTL5000 stereo DAC/ADC codec instead.
This gives the X65 two sample playback channels.

The trade-off is that generating simple beeps now requires more work (wave generation in memory),
but playing samples is now as easy as on PC.
There's no Amiga-style sample channel mixing though, so MOD players are off the table.
We now have the digitized sound effects support needed for modern game ports.

As a side benefit, the ADC input means I can route mixer outputs in for real-time audio sampling.
Configuring the mixer to line-in only mode with DAC output effectively creates a built-in sampler.

![SGTL5000](/media/2025-05-20_I2S-codec.png)

I originally avoided sample playback support to encourage FM sound usage, but two channels strikes the right balance. It's enough for essential sound effects without encouraging developers to abandon FM synthesis entirely for sampled music playback.

The codec's $5 cost was offset by savings from the dropped PCM components.

This upgrade has significantly expanded the X65's audio capabilities
while maintaining its unique character.

You can [listen it in action in the YT video](https://www.youtube.com/watch?v=XGbmyHnsQmw){:target="_blank"}.
