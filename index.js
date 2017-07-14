"use strict";

const sharp = require("sharp")
const ul = require("ul")
const fs = require("fs")
const gm = require("gm")
const phantomFs = require("pn/fs");
const imageToAscii = require("image-to-ascii")
const svg2png = require("svg2png");
var DeltaE = require('delta-e')
var colorSpace = require('color-space')
const { shapes, doubleShapes } = require('./shape')

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

// Utils
const isPxWhite = px => px.a === 0
const oneIn4 = () => {
  const ponderator = [false, false, false, true]
  return ponderator[Math.floor(Math.random()*ponderator.length)]
}
const imgToSvg = (path, cb) => {
    const pxSize = 10
    let outerSize = pxSize
    let filledPixels = {}
    const stringify_fn = pixels => pixels.map((row, y) => {
      return row.map((pixel, x) => {

        // Already filled (thanks to double shapes)
        if (filledPixels[y] && filledPixels[y][x]) return

        // White or transparent +  frequelty leave an empty spot
        if (isPxWhite(pixel) || oneIn4()) {
          return `<rect x="${x * outerSize}" y="${y * outerSize}" width="${pxSize}" height="${pxSize}" fill="rgb(255, 255, 255)"></rect>`
        }

        // Pick a color
        // Closest color
        // const baseColor = [ pixel.r, pixel.g, pixel.b ]
        // const color = pixel.a === 0 ? [255, 255, 255] : closestToColor(baseColor)
        // Random color
        const color = pixel.a === 0 ? [255, 255, 255] : randomColor()

        // Double
        const rightPx = pixels[y][x + 1]
        const bottomPx = pixels[y + 1][x]
        const opposedPx = pixels[y + 1][x + 1]
        if (rightPx && bottomPx && opposedPx && !isPxWhite(rightPx) && !isPxWhite(bottomPx) && !isPxWhite(opposedPx)) {
          // Can make double
          if (oneIn4() && oneIn4()) {
            filledPixels[y] = filledPixels[y] || {}
            filledPixels[y + 1] = filledPixels[y + 1] || {}
            filledPixels[y][x + 1] = true
            filledPixels[y + 1][x] = true
            filledPixels[y + 1][x + 1] = true
            // Pick a random double shape
            const doubleShape = doubleShapes[Math.floor(Math.random()*doubleShapes.length)];
            return doubleShape(x * outerSize, y * outerSize, pxSize * 2, pxSize * 2, `rgb(${color[0]}, ${color[1]}, ${color[2]})`)
          }
        }

        // Pick a random shape
        const shape = shapes[Math.floor(Math.random()*shapes.length)];
        return shape(x * outerSize, y * outerSize, pxSize, pxSize, `rgb(${color[0]}, ${color[1]}, ${color[2]})`)
      }).join("")
    }).join("")
    const options = {
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
  console.log(err || 'success')
  // convert to png
  phantomFs.readFile("output.svg")
      .then(svg2png)
      .then(buffer => phantomFs.writeFile("output.png", buffer))
      .catch(e => console.error(e));

});
