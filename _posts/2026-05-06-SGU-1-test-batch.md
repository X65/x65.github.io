---
title: SGU-1 Test Batch #1
category: news
author: smokku
---

Test batch of SGU-1 "chips" just arrived…

![SGU-1 Test Batch](/media/2026-05-06_SGU-1-test-batch-1.png)

## SGU-1

is a new audio-synthesis hardware under development as part of the X65 Microcomputer Project.  
cherry-picks the best features of OPL/ESFM, OPM, SID, POKEY, and Paula,  
combining 4-operator FM synthesis with per-channel subtractive filtering and hardware sweeps.

SGU-1 is implemented using a microcontroller paired with an audio CODEC chip.
Together they generate a stereo 48 kHz I²S stream, which is converted to an analog stereo line-out signal.
Contemporary audio-synthesis chips with advanced features are no longer manufactured,
so creating our own solution was the only practical way to bring such capabilities to the X65.

It has the following capabilities:

- 9 channels of 4-operator FM synthesis
- stereo sound
- 8 waveforms per operator (sine, triangle, sawtooth, pulse, noise, periodic noise, reserved, sample)
- per-operator waveform parameter (WPAR) for wave shaping
- flexible ESFM-style operator routing (per-operator output and modulation input levels)
- per-operator hard sync and ring modulation
- OPN-style ADSR envelope with sustain rate control (AR/DR/SL/SR/RR) and 5-bit attack/decay/sustain rates
- per-channel resonant filter (low pass, band pass, high pass, ring modulation)
- 128 pulse widths for pulse waveform
- volume, frequency and cutoff sweep units (per-channel)
- phase reset timer (per-channel)
- per-channel LFO waveform shape selection (saw, square, triangle, noise) for AM (tremolo) and PM (vibrato)
- 64KB PCM sample memory
- hardware sequencer
