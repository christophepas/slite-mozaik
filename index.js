"use strict";

const sharp = require("sharp")
const ul = require("ul")
const fs = require("fs")
const imageToAscii = require("image-to-ascii")
var DeltaE = require('delta-e')
var colorSpace = require('color-space')
const { shapes } = require('./shape')

const colors = [
  [ 90, 211, 220 ],
  [ 142, 235, 238 ],
  [ 254, 206, 85 ],
  [ 254, 229, 153 ],
  [ 120, 137, 243 ],
  [ 252, 74, 96 ],
  [ 250, 182, 165 ],
  [ 185, 232, 139 ],
  [ 243, 235, 148 ],
]

const closestToColor = (baseColor) => {
  let maxScore = 100
  let finalColor = [255, 255, 255]

  let baseColorLAB = colorSpace.rgb.lab(baseColor)
  baseColorLAB = { L: baseColorLAB[0], A: baseColorLAB[1], B: baseColorLAB[2] } // deltaE format

  colors.map((color) => {
    let colorLAB = colorSpace.rgb.lab(color)
    colorLAB = { L: colorLAB[0], A: colorLAB[1], B: colorLAB[2] } // deltaE format
    const score = DeltaE.getDeltaE00(baseColorLAB, colorLAB)
    if (score < maxScore) {
      finalColor = color
      maxScore = score
    }
  })
  return finalColor
}

const randomColor = () => colors[Math.floor(Math.random()*colors.length)];

const imgToSvg = (path, cb) => {
    const pxSize = 10
    let outerSize = pxSize
    const stringify_fn = pixels => pixels.map((row, y) => {
      return row.map((pixel, x) => {
        // Random shape
        const shape = shapes[Math.floor(Math.random()*shapes.length)];
        // Closest color
        // const baseColor = [ pixel.r, pixel.g, pixel.b ]
        // const color = pixel.a === 0 ? [255, 255, 255] : closestToColor(baseColor)
        // Random color
        const color = pixel.a === 0 ? [255, 255, 255] : randomColor()

        return shape(x * outerSize, y * outerSize, pxSize, pxSize, `rgb(${color[0]}, ${color[1]}, ${color[2]})`)
      }).join("")
    }).join("")
    const options = {
      size: {
        width: 50, //WARNING : MULTIPLIED BY THE PIWEL SIZE
        height: 50,
      },
      size_options: {
        px_size: {
          width: 1
        },
      },
      stringify_fn,
    }
    imageToAscii(path, options, (err, converted, raw, img) => {
        if (err) { return cb(err); }
        // console.log(converted)
        cb(null, `<svg width="${img[0].length * outerSize}" height="${img.length * outerSize}">${converted}</svg>`);
    });
}

// Actual call to the function
imgToSvg("input.png", (err, out) => {
  fs.writeFileSync('output.svg', out)
  console.log(err || 'success');
});
