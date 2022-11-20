# Linear Gradient Generator
Lets you select two colors for a linear gradient and generates css-property for easy copy-paste. Also generates randomized linear gradients in the HSL color space. [Check it out.](https://anmolmathias.github.io/hsl-gradient-generator/)

### HSL
Even though most human eyes detect colors similarly to how the RGB model works, we normally do not think or talk about colors as a mixture of these three components. We might, however, talk of colors as being more or less saturated than others, having different hues or tones, or as being brighter than others. For this reason, many software applications (open-source examples are Blender, GIMP, Inkscape, and Krita) include color pickers which try to cater to our perception of colors in the terms mentioned above.

One such perceptual color model is HSL (also called HLS), which is an acronym for hue, saturation, and lightness. Originally, it was introduced by Joblove and Greenberg as "hue/chroma/intensity". They describe the color space as a biconal solid in which the vertical axis represents all shades of gray between 0 (black) and 1 (white). All fully saturated colors then lie on the outer circle of the common basis of both cones at L=0.5, which allows for the hue to be defined as an angle. The third parameter, saturation, corresponds to the radius of the circle around the vertical axis at the position of the current lightness. 

An excellent primer for HSL can be checked out at [Lukas Stratmann's site](https://color.lukas-stratmann.com/color-systems/hsl.html) about color systems from which the literature on this README has been published. Please refer to the same for the references to models mentioned above and below.

### Motivation
It is sometimes preferable in working with art materials, digitized images, or other media, to use the HSV or HSL color model over alternative models such as RGB or CMYK, because of differences in the ways the models emulate how humans perceive color. RGB and CMYK are additive and subtractive models, respectively, modeling the way that primary color lights or pigments (respectively) combine to form new colors when mixed.

### Limitations
While the HSL color model has been designed to make color-picking easier for human beings, it is not perfect. One reason for this is the assigning of the same lightness to all three primaries. In the sRGB space primaries are assigned different positions on the y axis. When transforming these definitions of primary red, green, and blue back into XYZ space, differences in the Y component remain. Therefore, the primaries as defined for the sRGB space do not have the same perceived brightness, which means lightness in the HSL model is not the same as perceived brightness. This becomes apparent when comparing the HSL colors of maximum saturation and lightness 12 with a gray-scale image of the true perceived brightness values. 

### Install
1. Clone this repository
2. `cd` into the folder and install dependencies with `npm install`
3. `npm start`

## Licenses
This README is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa] and the code is distributed under MIT.

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg