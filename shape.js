//triangles
const shape1 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 10 10"><g fill="${color}"><polygon id="triangle-tl" points="10 0 0 10 0 0"></polygon></g></svg>`

const shape2 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 10 10"><g fill="${color}"><polygon transform="translate(5.000000, 5.000000) rotate(180.000000) translate(-5.000000, -5.000000) " points="10 0 0 10 0 0"></polygon></g></svg>`

const shape3 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 10 10"><g fill="${color}"><polygon id="triangle-bl" transform="translate(5.000000, 5.000000) rotate(-180.000000) translate(-5.000000, -5.000000) " points="10 0 10 10 0 0"></polygon></g></svg>`

const shape4 = (x, y, width, height, color) =>
`<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 10 10"><g fill="${color}"><polygon id="triangle-bl" transform="translate(5.000000, 5.000000) rotate(-180.000000) translate(-5.000000, -5.000000) " points="0 -3.55271368e-15 0 10 10 10"></polygon></g></svg>`

//quarter rounds
const shape5 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 10 10"><g fill="${color}"><path d="M10,0 C10,5.5228475 5.5228475,10 0,10 L0,0 L10,0 Z" style="mix-blend-mode: multiply;"></path></g></svg>`

const shape6 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 10 10"><g fill="${color}"><path d="M10,0 C10,5.5228475 5.5228475,10 0,10 L0,0 L10,0 Z" style="mix-blend-mode: multiply;" transform="translate(5.000000, 5.000000) rotate(180.000000) translate(-5.000000, -5.000000) "></path></g></svg>`

const shape7 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 10 10"><g fill="${color}"><path d="M10,0 C10,5.5228475 5.5228475,10 0,10 L0,0 L10,0 Z" style="mix-blend-mode: multiply;" transform="translate(5.000000, 5.000000) scale(-1, 1) translate(-5.000000, -5.000000) "></path></g></svg>`

const shape8 = (x, y, width, height, color) =>
`<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 10 10"><g fill="${color}"><path d="M10,0 C10,5.5228475 5.5228475,10 0,10 L0,0 L10,0 Z" style="mix-blend-mode: multiply;" transform="translate(5.000000, 5.000000) scale(-1, 1) rotate(-180.000000) translate(-5.000000, -5.000000) "></path></g></svg>`

//quarter empty rounds
const shape9 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 10 10"><g fill="${color}"><path d="M10,0.0115749473 C9.97329712,5.01941234 6.03286743,9.97467041 0.0115749473,10 L-1.71529457e-14,5 C2.70874023,5.00578747 5,2.90740967 5.00578747,0.0115749473 L10,0.0115749473 Z" id="Path"></path></g></svg>`

const shape10 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 10 10"><g fill="${color}"><path d="M-2.94209102e-15,10 C0.0267028809,4.99216261 3.96713257,0.0369045371 9.98842505,0.0115749473 L10,5.01157495 C7.29125977,5.00578747 5,7.10416528 4.99421253,10 L-2.94209102e-15,10 Z" id="Path"></path></g></svg>`

const shape11 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 10 10"><g fill="${color}"><path d="M-2.94209102e-15,0 C0.0267028809,5.00783739 3.96713257,9.96309546 9.98842505,9.98842505 L10,4.98842505 C7.29125977,4.99421253 5,2.89583472 4.99421253,2.10942375e-13 L-2.94209102e-15,0 Z" id="Path"></path></g></svg>`

const shape12 = (x, y, width, height, color) =>
`<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 10 10"><g fill="${color}"><path d="M10,10 C9.97329712,4.99216261 6.03286743,0.0369045371 0.0115749473,0.0115749473 L-2.94209102e-15,5.01157495 C2.70874023,5.00578747 5,7.10416528 5.00578747,10 L10,10 Z" id="Path"></path></g></svg>`

//others
const shape13 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 10 10"><g fill="${color}"><polygon points="0 0 10 0 10 10 0 10"></polygon></g></svg>`

const shape14 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 10 10"><g fill="${color}"><path d="M5,0 C7.76142375,0 10,2.23857625 10,5 C10,7.76142375 7.76142375,10 5,10 C2.23857625,10 0,7.76142375 0,5 C0,2.23857625 2.23857625,0 5,0 Z M5,2.5 C3.61928812,2.5 2.5,3.61928812 2.5,5 C2.5,6.38071188 3.61928812,7.5 5,7.5 C6.38071188,7.5 7.5,6.38071188 7.5,5 C7.5,3.61928812 6.38071188,2.5 5,2.5 Z" id="emptyround"></path></g></svg>`

const shape15 = (x, y, width, height, color) =>
  `<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 10 10"><g fill="${color}"><path d="M5,0 C7.76142375,0 10,2.23857625 10,5 C10,7.76142375 7.76142375,10 5,10 C2.23857625,10 0,7.76142375 0,5 C0,2.23857625 2.23857625,0 5,0 Z M5,2.5 C3.61928812,2.5 2.5,3.61928812 2.5,5 C2.5,6.38071188 3.61928812,7.5 5,7.5 C6.38071188,7.5 7.5,6.38071188 7.5,5 C7.5,3.61928812 6.38071188,2.5 5,2.5 Z" id="emptyround"></path></g></svg>`

const shape16 = (x, y, width, height, color) =>
`<svg x=${x} y=${y} width=${width} height=${height} viewBox="0 0 10 10"><g fill="${color}"><circle id="round" cx="5" cy="5" r="2.5"></circle></g></svg>`



module.exports.shapes = [shape1, shape2, shape3, shape4, shape5, shape6, shape7, shape8, shape9, shape10, shape11, shape12, shape13, shape14, shape15, shape16]
