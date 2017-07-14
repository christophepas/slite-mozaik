//triangles
const shape1 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 1 1"><polygon fill="${color}" fill-rule="nonzero" points="1 0 0 1 0 0"></polygon></svg>`

const shape2 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 1 1"><polygon fill="${color}" fill-rule="nonzero" transform="translate(0.500000, 0.500000) rotate(180.000000) translate(-0.500000, -0.500000) " points="1 0 0 1 0 0"></polygon></svg>`

const shape3 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 1 1"><polygon fill="${color}" fill-rule="nonzero" transform="translate(0.500000, 0.500000) rotate(-180.000000) translate(-0.500000, -0.500000) " points="1 0 1 1 0 0"></polygon></svg>`

const shape4 = (x, y, width, height, color) =>
`<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 1 1"><polygon fill="${color}" fill-rule="nonzero"  transform="translate(0.500000, 0.500000) rotate(-180.000000) translate(-0.500000, -0.500000) " points="0 0 0 1 1 1"></polygon></svg>`

//quarter rounds
const shape5 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 1 1"><g fill="${color}"><path d="M1,0 C1,0.55228475 0.55228475,1 0,1 L0,0 L1,0 Z" style="mix-blend-mode: multiply;"></path></g></svg>`

const shape6 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 1 1"><g fill="${color}"><path d="M1,0 C1,0.55228475 0.55228475,1 0,1 L0,0 L1,0 Z" style="mix-blend-mode: multiply;" transform="translate(0.500000, 0.500000) rotate(180.000000) translate(-0.500000, -0.500000) "></path></g></svg>`

const shape7 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 1 1"><g fill="${color}"><path d="M1,0 C1,0.55228475 0.55228475,1 0,1 L0,0 L1,0 Z" style="mix-blend-mode: multiply;" transform="translate(0.500000, 0.500000) scale(-1, 1) translate(-0.500000, -0.500000) "></path></g></svg>`

const shape8 = (x, y, width, height, color) =>
`<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 1 1"><g fill="${color}"><path d="M1,0 C1,0.55228475 0.55228475,1 0,1 L0,0 L1,0 Z" style="mix-blend-mode: multiply;" transform="translate(0.500000, 0.500000) scale(-1, 1) rotate(-180.000000) translate(-0.500000, -0.500000) "></path></g></svg>`

//quarter empty rounds
const shape9 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 1 1"><g fill="${color}"><path d="M1,0.00115749473 C0.997329712,0.501941234 0.603286743,0.997467041 0.00115749473,1 L-3.60822483e-15,0.5 C0.270874023,0.500578747 0.5,0.290740967 0.500578747,0.00115749473 L1,0.00115749473 Z" id="Path"></path></g></svg>`

const shape10 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 1 1"><g fill="${color}"><path d="M-2.94209102e-15,1 C0.00267028809,0.499216261 0.396713257,0.00369045371 0.998842505,0.00115749473 L1,0.501157495 C0.729125977,0.500578747 0.5,0.710416528 0.499421253,1 L-2.94209102e-15,1 Z" id="Path"></path></g></svg>`

const shape11 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 1 1"><g fill="${color}"><path d="M-2.94209102e-15,0 C0.00267028809,0.500783739 0.396713257,0.996309546 0.998842505,0.998842505 L1,0.498842505 C0.729125977,0.499421253 0.5,0.289583472 0.499421253,2.10942375e-14 L-2.94209102e-15,0 Z" id="Path"></path></g></svg>`

const shape12 = (x, y, width, height, color) =>
`<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 1 1"><g fill="${color}"><path d="M1,1 C0.997329712,0.499216261 0.603286743,0.00369045371 0.00115749473,0.00115749473 L-2.94209102e-15,0.501157495 C0.270874023,0.500578747 0.5,0.710416528 0.500578747,1 L1,1 Z" id="Path"></path></g></svg>`

//others
const shape13 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 1 1"><g fill="${color}"><polygon points="0 0 1 0 1 1 0 1"></polygon></g></svg>`

const shape14 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 1 1"><g fill="${color}"><path d="M0.5,0 C0.776142375,0 1,0.223857625 1,0.5 C1,0.776142375 0.776142375,1 0.5,1 C0.223857625,1 0,0.776142375 0,0.5 C0,0.223857625 0.223857625,0 0.5,0 Z M0.5,0.25 C0.361928812,0.25 0.25,0.361928812 0.25,0.5 C0.25,0.638071188 0.361928812,0.75 0.5,0.75 C0.638071188,0.75 0.75,0.638071188 0.75,0.5 C0.75,0.361928812 0.638071188,0.25 0.5,0.25 Z" id="emptyround"></path></g></svg>`

const shape15 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 1 1"><g fill="${color}"><path d="M0.5,0 C0.776142375,0 1,0.223857625 1,0.5 C1,0.776142375 0.776142375,1 0.5,1 C0.223857625,1 0,0.776142375 0,0.5 C0,0.223857625 0.223857625,0 0.5,0 Z M0.5,0.25 C0.361928812,0.25 0.25,0.361928812 0.25,0.5 C0.25,0.638071188 0.361928812,0.75 0.5,0.75 C0.638071188,0.75 0.75,0.638071188 0.75,0.5 C0.75,0.361928812 0.638071188,0.25 0.5,0.25 Z" id="emptyround"></path></g></svg>`

const shape16 = (x, y, width, height, color) =>
`<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 1 1"><g fill="${color}"><circle cx="0.5" cy="0.5" r="0.5"></circle></g></svg>`



module.exports.shapes = [shape1, shape2, shape3, shape4, shape5, shape6, shape7, shape8, shape9, shape10, shape11, shape12, shape13, shape14, shape15, shape16]
