---
title: Advanced Image Converter
category: news
author: smokku
---

In order to work on advanced graphical demos, I needed proper graphical assets.
The easiest way to create ones is to convert PNG pictures, thus I've written a converter.

I wanted a tool that is both easy to implement and extend, so I chose to write it in TypeScript.
I also aimed for the tool to be standalone, avoiding the need for additional packages or dependencies. So Node.js is a no-go.
Fortunately, the creator of Node.js developed an alternative runtime: [Deno][1]. It supports TypeScript natively, eliminating the need for manual compilation, and allows dependencies to be imported directly from the web, making the script truly standalone.
Deno is pretty intuitive runtime. I am able to program for it without spending a lot of time learning it beforehand.

```console
> tools/converter.ts --help
Converts .png file to X65 data in .h-eader format
Arguments:
  --format, -f         (optional) - Output format [hires,multicolor,chunky] (Default: multicolor)
  --double, -d         (optional) - Horizontal pixel doubling (Default: false)
  --cell, -c           (optional) - Row cell height (Default: 8)
  --palette, -p        (optional) - Palette transformation [closest,plus4,plus4-2,fixed([00,]11,22,33)] (Default: closest)
  --transparent, -t    (optional) - Should handle transparency (Default: false)
  --greys, -g          (optional) - Should keep greys grey (Default: true)
  --threshold, -b      (optional) - Brightness threshold for color mapping (Default: 33.3)
  --out, -o            (optional) - Output .h-eader file (Default: stdout)

  --help, -?           - show this help text
```

The algorithm's first step maps the input image's colors to the nearest X65 palette colors.
This can result in multiple original colors being mapped to a single X65 color.
In the second pass, it redistributes clashing colors to unused X65 colors, minimizing the need for human intervention to get a good looking picture.
It may not be able to do so without affecting the overall look of the picture to much and you may end up with some colors still clash and be mapped to single X65 color degrading the picture quality. Then you will need to manually tweak the source palette for colors still clashing after the Optimization step.

The X65 palette supports only 8 gray levels (6 if excluding pure black and white).
TED (Plus/4) offers 8 grays plus pure black but lacks pure white. To address this, I introduced an option to replace clashing gray shades with non-gray colors.

The picture that inspired me to go for `Plus/4`-like color scheme and capabilities is
[Frenzy-Pic-Kurosawa+4](https://plus4world.powweb.com/software/Frenzy-Pic-KurosawaPlus4),
so obviously this is the first I've converted:

![Frenzy-Pic-Kurosawa+4](/media/2024-11-24_Kurosawa-Plus4.png)
![Frenzy-Pic-Kurosawa](/media/2024-11-24_Kurosawa-X65.jpg)

Let's try a hires mode picture - [Shadow of the Breast](https://plus4world.powweb.com/software/Shadow_of_the_Breast):

![Shadow of the Breast](/media/2024-11-29_shadow.jpg)

Finally, a compulsory Lena image conversion:

![Lena](/media/2024-11-24_Lena.jpg)

Let’s compare the initial crude version of the converter (hacked in C over a few hours) and the new implementation.

![Lena](/media/2024-11-29_Zak_before.png)
![Lena](/media/2024-11-29_Zak_today.jpg)

[1]: https://deno.com/
