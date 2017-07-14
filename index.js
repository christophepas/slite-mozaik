"use strict";

const ul = require("ul")
const fs = require("fs")
const imageToAscii = require("image-to-ascii")
// const svg2png = require("svg2png")
const { shape1 } = require('./shape')

const imgToSvg = (path, opts, options, cb) => {
    if (typeof opts === "function") {
        options = {}
        cb = opts;
        opts = {};
    }

    if (typeof options === "function") {
        cb = options;
        options = {};
        opts = {};
    }

    opts = ul.merge(opts, {
        pxSize: 10
      , margin: 2
    });
    let outerSize = opts.pxSize + opts.margin;

    options = ul.deepMerge(options, {
        size_options: {
            px_size: {
                width: 1
            }
        }
      , stringify_fn: pixels => pixels.map((row, y) =>
            row.map((pixel, x) => {
                console.log(pixel);
                return `<rect x="${x * outerSize}" y="${y * outerSize}" width="${opts.pxSize}" height="${opts.pxSize}" fill="rgb(${pixel.r}, ${pixel.g}, ${pixel.b})"></rect>`
                const innerShape = shape1
                const shape = `<rect x="${x * outerSize}" y="${y * outerSize}" width="${opts.pxSize}" height="${opts.pxSize}" fill="rgb(${pixel.r}, ${pixel.g}, ${pixel.b})">${innerShape}</rect>`
                return shape
              }
            ).join("\n")
        ).join("\n")
    });


    imageToAscii(path, options, (err, converted, raw, img) => {
        if (err) { return cb(err); }
        // console.log(converted)
        cb(null, `<svg width="${img[0].length * outerSize}" height="${img.length * outerSize}">${converted}</svg>`);
    });
};

imgToSvg("https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Invader_3-24.png", (err, out) => {
    // console.log(err || out);
    fs.writeFileSync('toprocess.svg', out)

    // const svg = fs.readFileSync("toprocess.svg")
    // const png = svg2png(svg)
    // fs.writeFileSync('toprocess.png', png)
});
