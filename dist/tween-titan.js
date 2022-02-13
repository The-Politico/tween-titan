/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TweenTitan"] = factory();
	else
		root["TweenTitan"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Color\": () => /* binding */ Color,\n/* harmony export */   \"darker\": () => /* binding */ darker,\n/* harmony export */   \"brighter\": () => /* binding */ brighter,\n/* harmony export */   \"default\": () => /* binding */ color,\n/* harmony export */   \"rgbConvert\": () => /* binding */ rgbConvert,\n/* harmony export */   \"rgb\": () => /* binding */ rgb,\n/* harmony export */   \"Rgb\": () => /* binding */ Rgb,\n/* harmony export */   \"hslConvert\": () => /* binding */ hslConvert,\n/* harmony export */   \"hsl\": () => /* binding */ hsl\n/* harmony export */ });\n/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ \"./node_modules/d3-color/src/define.js\");\n\n\nfunction Color() {}\n\nvar darker = 0.7;\nvar brighter = 1 / darker;\n\nvar reI = \"\\\\s*([+-]?\\\\d+)\\\\s*\",\n    reN = \"\\\\s*([+-]?\\\\d*\\\\.?\\\\d+(?:[eE][+-]?\\\\d+)?)\\\\s*\",\n    reP = \"\\\\s*([+-]?\\\\d*\\\\.?\\\\d+(?:[eE][+-]?\\\\d+)?)%\\\\s*\",\n    reHex = /^#([0-9a-f]{3,8})$/,\n    reRgbInteger = new RegExp(\"^rgb\\\\(\" + [reI, reI, reI] + \"\\\\)$\"),\n    reRgbPercent = new RegExp(\"^rgb\\\\(\" + [reP, reP, reP] + \"\\\\)$\"),\n    reRgbaInteger = new RegExp(\"^rgba\\\\(\" + [reI, reI, reI, reN] + \"\\\\)$\"),\n    reRgbaPercent = new RegExp(\"^rgba\\\\(\" + [reP, reP, reP, reN] + \"\\\\)$\"),\n    reHslPercent = new RegExp(\"^hsl\\\\(\" + [reN, reP, reP] + \"\\\\)$\"),\n    reHslaPercent = new RegExp(\"^hsla\\\\(\" + [reN, reP, reP, reN] + \"\\\\)$\");\n\nvar named = {\n  aliceblue: 0xf0f8ff,\n  antiquewhite: 0xfaebd7,\n  aqua: 0x00ffff,\n  aquamarine: 0x7fffd4,\n  azure: 0xf0ffff,\n  beige: 0xf5f5dc,\n  bisque: 0xffe4c4,\n  black: 0x000000,\n  blanchedalmond: 0xffebcd,\n  blue: 0x0000ff,\n  blueviolet: 0x8a2be2,\n  brown: 0xa52a2a,\n  burlywood: 0xdeb887,\n  cadetblue: 0x5f9ea0,\n  chartreuse: 0x7fff00,\n  chocolate: 0xd2691e,\n  coral: 0xff7f50,\n  cornflowerblue: 0x6495ed,\n  cornsilk: 0xfff8dc,\n  crimson: 0xdc143c,\n  cyan: 0x00ffff,\n  darkblue: 0x00008b,\n  darkcyan: 0x008b8b,\n  darkgoldenrod: 0xb8860b,\n  darkgray: 0xa9a9a9,\n  darkgreen: 0x006400,\n  darkgrey: 0xa9a9a9,\n  darkkhaki: 0xbdb76b,\n  darkmagenta: 0x8b008b,\n  darkolivegreen: 0x556b2f,\n  darkorange: 0xff8c00,\n  darkorchid: 0x9932cc,\n  darkred: 0x8b0000,\n  darksalmon: 0xe9967a,\n  darkseagreen: 0x8fbc8f,\n  darkslateblue: 0x483d8b,\n  darkslategray: 0x2f4f4f,\n  darkslategrey: 0x2f4f4f,\n  darkturquoise: 0x00ced1,\n  darkviolet: 0x9400d3,\n  deeppink: 0xff1493,\n  deepskyblue: 0x00bfff,\n  dimgray: 0x696969,\n  dimgrey: 0x696969,\n  dodgerblue: 0x1e90ff,\n  firebrick: 0xb22222,\n  floralwhite: 0xfffaf0,\n  forestgreen: 0x228b22,\n  fuchsia: 0xff00ff,\n  gainsboro: 0xdcdcdc,\n  ghostwhite: 0xf8f8ff,\n  gold: 0xffd700,\n  goldenrod: 0xdaa520,\n  gray: 0x808080,\n  green: 0x008000,\n  greenyellow: 0xadff2f,\n  grey: 0x808080,\n  honeydew: 0xf0fff0,\n  hotpink: 0xff69b4,\n  indianred: 0xcd5c5c,\n  indigo: 0x4b0082,\n  ivory: 0xfffff0,\n  khaki: 0xf0e68c,\n  lavender: 0xe6e6fa,\n  lavenderblush: 0xfff0f5,\n  lawngreen: 0x7cfc00,\n  lemonchiffon: 0xfffacd,\n  lightblue: 0xadd8e6,\n  lightcoral: 0xf08080,\n  lightcyan: 0xe0ffff,\n  lightgoldenrodyellow: 0xfafad2,\n  lightgray: 0xd3d3d3,\n  lightgreen: 0x90ee90,\n  lightgrey: 0xd3d3d3,\n  lightpink: 0xffb6c1,\n  lightsalmon: 0xffa07a,\n  lightseagreen: 0x20b2aa,\n  lightskyblue: 0x87cefa,\n  lightslategray: 0x778899,\n  lightslategrey: 0x778899,\n  lightsteelblue: 0xb0c4de,\n  lightyellow: 0xffffe0,\n  lime: 0x00ff00,\n  limegreen: 0x32cd32,\n  linen: 0xfaf0e6,\n  magenta: 0xff00ff,\n  maroon: 0x800000,\n  mediumaquamarine: 0x66cdaa,\n  mediumblue: 0x0000cd,\n  mediumorchid: 0xba55d3,\n  mediumpurple: 0x9370db,\n  mediumseagreen: 0x3cb371,\n  mediumslateblue: 0x7b68ee,\n  mediumspringgreen: 0x00fa9a,\n  mediumturquoise: 0x48d1cc,\n  mediumvioletred: 0xc71585,\n  midnightblue: 0x191970,\n  mintcream: 0xf5fffa,\n  mistyrose: 0xffe4e1,\n  moccasin: 0xffe4b5,\n  navajowhite: 0xffdead,\n  navy: 0x000080,\n  oldlace: 0xfdf5e6,\n  olive: 0x808000,\n  olivedrab: 0x6b8e23,\n  orange: 0xffa500,\n  orangered: 0xff4500,\n  orchid: 0xda70d6,\n  palegoldenrod: 0xeee8aa,\n  palegreen: 0x98fb98,\n  paleturquoise: 0xafeeee,\n  palevioletred: 0xdb7093,\n  papayawhip: 0xffefd5,\n  peachpuff: 0xffdab9,\n  peru: 0xcd853f,\n  pink: 0xffc0cb,\n  plum: 0xdda0dd,\n  powderblue: 0xb0e0e6,\n  purple: 0x800080,\n  rebeccapurple: 0x663399,\n  red: 0xff0000,\n  rosybrown: 0xbc8f8f,\n  royalblue: 0x4169e1,\n  saddlebrown: 0x8b4513,\n  salmon: 0xfa8072,\n  sandybrown: 0xf4a460,\n  seagreen: 0x2e8b57,\n  seashell: 0xfff5ee,\n  sienna: 0xa0522d,\n  silver: 0xc0c0c0,\n  skyblue: 0x87ceeb,\n  slateblue: 0x6a5acd,\n  slategray: 0x708090,\n  slategrey: 0x708090,\n  snow: 0xfffafa,\n  springgreen: 0x00ff7f,\n  steelblue: 0x4682b4,\n  tan: 0xd2b48c,\n  teal: 0x008080,\n  thistle: 0xd8bfd8,\n  tomato: 0xff6347,\n  turquoise: 0x40e0d0,\n  violet: 0xee82ee,\n  wheat: 0xf5deb3,\n  white: 0xffffff,\n  whitesmoke: 0xf5f5f5,\n  yellow: 0xffff00,\n  yellowgreen: 0x9acd32\n};\n\n(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.default)(Color, color, {\n  copy: function(channels) {\n    return Object.assign(new this.constructor, this, channels);\n  },\n  displayable: function() {\n    return this.rgb().displayable();\n  },\n  hex: color_formatHex, // Deprecated! Use color.formatHex.\n  formatHex: color_formatHex,\n  formatHsl: color_formatHsl,\n  formatRgb: color_formatRgb,\n  toString: color_formatRgb\n});\n\nfunction color_formatHex() {\n  return this.rgb().formatHex();\n}\n\nfunction color_formatHsl() {\n  return hslConvert(this).formatHsl();\n}\n\nfunction color_formatRgb() {\n  return this.rgb().formatRgb();\n}\n\nfunction color(format) {\n  var m, l;\n  format = (format + \"\").trim().toLowerCase();\n  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000\n      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00\n      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000\n      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000\n      : null) // invalid hex\n      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)\n      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)\n      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)\n      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)\n      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)\n      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)\n      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins\n      : format === \"transparent\" ? new Rgb(NaN, NaN, NaN, 0)\n      : null;\n}\n\nfunction rgbn(n) {\n  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);\n}\n\nfunction rgba(r, g, b, a) {\n  if (a <= 0) r = g = b = NaN;\n  return new Rgb(r, g, b, a);\n}\n\nfunction rgbConvert(o) {\n  if (!(o instanceof Color)) o = color(o);\n  if (!o) return new Rgb;\n  o = o.rgb();\n  return new Rgb(o.r, o.g, o.b, o.opacity);\n}\n\nfunction rgb(r, g, b, opacity) {\n  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);\n}\n\nfunction Rgb(r, g, b, opacity) {\n  this.r = +r;\n  this.g = +g;\n  this.b = +b;\n  this.opacity = +opacity;\n}\n\n(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.default)(Rgb, rgb, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {\n  brighter: function(k) {\n    k = k == null ? brighter : Math.pow(brighter, k);\n    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);\n  },\n  darker: function(k) {\n    k = k == null ? darker : Math.pow(darker, k);\n    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);\n  },\n  rgb: function() {\n    return this;\n  },\n  displayable: function() {\n    return (-0.5 <= this.r && this.r < 255.5)\n        && (-0.5 <= this.g && this.g < 255.5)\n        && (-0.5 <= this.b && this.b < 255.5)\n        && (0 <= this.opacity && this.opacity <= 1);\n  },\n  hex: rgb_formatHex, // Deprecated! Use color.formatHex.\n  formatHex: rgb_formatHex,\n  formatRgb: rgb_formatRgb,\n  toString: rgb_formatRgb\n}));\n\nfunction rgb_formatHex() {\n  return \"#\" + hex(this.r) + hex(this.g) + hex(this.b);\n}\n\nfunction rgb_formatRgb() {\n  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));\n  return (a === 1 ? \"rgb(\" : \"rgba(\")\n      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + \", \"\n      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + \", \"\n      + Math.max(0, Math.min(255, Math.round(this.b) || 0))\n      + (a === 1 ? \")\" : \", \" + a + \")\");\n}\n\nfunction hex(value) {\n  value = Math.max(0, Math.min(255, Math.round(value) || 0));\n  return (value < 16 ? \"0\" : \"\") + value.toString(16);\n}\n\nfunction hsla(h, s, l, a) {\n  if (a <= 0) h = s = l = NaN;\n  else if (l <= 0 || l >= 1) h = s = NaN;\n  else if (s <= 0) h = NaN;\n  return new Hsl(h, s, l, a);\n}\n\nfunction hslConvert(o) {\n  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);\n  if (!(o instanceof Color)) o = color(o);\n  if (!o) return new Hsl;\n  if (o instanceof Hsl) return o;\n  o = o.rgb();\n  var r = o.r / 255,\n      g = o.g / 255,\n      b = o.b / 255,\n      min = Math.min(r, g, b),\n      max = Math.max(r, g, b),\n      h = NaN,\n      s = max - min,\n      l = (max + min) / 2;\n  if (s) {\n    if (r === max) h = (g - b) / s + (g < b) * 6;\n    else if (g === max) h = (b - r) / s + 2;\n    else h = (r - g) / s + 4;\n    s /= l < 0.5 ? max + min : 2 - max - min;\n    h *= 60;\n  } else {\n    s = l > 0 && l < 1 ? 0 : h;\n  }\n  return new Hsl(h, s, l, o.opacity);\n}\n\nfunction hsl(h, s, l, opacity) {\n  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);\n}\n\nfunction Hsl(h, s, l, opacity) {\n  this.h = +h;\n  this.s = +s;\n  this.l = +l;\n  this.opacity = +opacity;\n}\n\n(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.default)(Hsl, hsl, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {\n  brighter: function(k) {\n    k = k == null ? brighter : Math.pow(brighter, k);\n    return new Hsl(this.h, this.s, this.l * k, this.opacity);\n  },\n  darker: function(k) {\n    k = k == null ? darker : Math.pow(darker, k);\n    return new Hsl(this.h, this.s, this.l * k, this.opacity);\n  },\n  rgb: function() {\n    var h = this.h % 360 + (this.h < 0) * 360,\n        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,\n        l = this.l,\n        m2 = l + (l < 0.5 ? l : 1 - l) * s,\n        m1 = 2 * l - m2;\n    return new Rgb(\n      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),\n      hsl2rgb(h, m1, m2),\n      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),\n      this.opacity\n    );\n  },\n  displayable: function() {\n    return (0 <= this.s && this.s <= 1 || isNaN(this.s))\n        && (0 <= this.l && this.l <= 1)\n        && (0 <= this.opacity && this.opacity <= 1);\n  },\n  formatHsl: function() {\n    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));\n    return (a === 1 ? \"hsl(\" : \"hsla(\")\n        + (this.h || 0) + \", \"\n        + (this.s || 0) * 100 + \"%, \"\n        + (this.l || 0) * 100 + \"%\"\n        + (a === 1 ? \")\" : \", \" + a + \")\");\n  }\n}));\n\n/* From FvD 13.37, CSS Color Module Level 3 */\nfunction hsl2rgb(h, m1, m2) {\n  return (h < 60 ? m1 + (m2 - m1) * h / 60\n      : h < 180 ? m2\n      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60\n      : m1) * 255;\n}\n\n\n//# sourceURL=webpack://TweenTitan/./node_modules/d3-color/src/color.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__,\n/* harmony export */   \"extend\": () => /* binding */ extend\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(constructor, factory, prototype) {\n  constructor.prototype = factory.prototype = prototype;\n  prototype.constructor = constructor;\n}\n\nfunction extend(parent, definition) {\n  var prototype = Object.create(parent.prototype);\n  for (var key in definition) prototype[key] = definition[key];\n  return prototype;\n}\n\n\n//# sourceURL=webpack://TweenTitan/./node_modules/d3-color/src/define.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/array.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/array.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__,\n/* harmony export */   \"genericArray\": () => /* binding */ genericArray\n/* harmony export */ });\n/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./value.js */ \"./node_modules/d3-interpolate/src/value.js\");\n/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberArray.js */ \"./node_modules/d3-interpolate/src/numberArray.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {\n  return ((0,_numberArray_js__WEBPACK_IMPORTED_MODULE_0__.isNumberArray)(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_0__.default : genericArray)(a, b);\n}\n\nfunction genericArray(a, b) {\n  var nb = b ? b.length : 0,\n      na = a ? Math.min(nb, a.length) : 0,\n      x = new Array(na),\n      c = new Array(nb),\n      i;\n\n  for (i = 0; i < na; ++i) x[i] = (0,_value_js__WEBPACK_IMPORTED_MODULE_1__.default)(a[i], b[i]);\n  for (; i < nb; ++i) c[i] = b[i];\n\n  return function(t) {\n    for (i = 0; i < na; ++i) c[i] = x[i](t);\n    return c;\n  };\n}\n\n\n//# sourceURL=webpack://TweenTitan/./node_modules/d3-interpolate/src/array.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basis\": () => /* binding */ basis,\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction basis(t1, v0, v1, v2, v3) {\n  var t2 = t1 * t1, t3 = t2 * t1;\n  return ((1 - 3 * t1 + 3 * t2 - t3) * v0\n      + (4 - 6 * t2 + 3 * t3) * v1\n      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2\n      + t3 * v3) / 6;\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {\n  var n = values.length - 1;\n  return function(t) {\n    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),\n        v1 = values[i],\n        v2 = values[i + 1],\n        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,\n        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;\n    return basis((t - i / n) * n, v0, v1, v2, v3);\n  };\n}\n\n\n//# sourceURL=webpack://TweenTitan/./node_modules/d3-interpolate/src/basis.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ \"./node_modules/d3-interpolate/src/basis.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {\n  var n = values.length;\n  return function(t) {\n    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),\n        v0 = values[(i + n - 1) % n],\n        v1 = values[i % n],\n        v2 = values[(i + 1) % n],\n        v3 = values[(i + 2) % n];\n    return (0,_basis_js__WEBPACK_IMPORTED_MODULE_0__.basis)((t - i / n) * n, v0, v1, v2, v3);\n  };\n}\n\n\n//# sourceURL=webpack://TweenTitan/./node_modules/d3-interpolate/src/basisClosed.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hue\": () => /* binding */ hue,\n/* harmony export */   \"gamma\": () => /* binding */ gamma,\n/* harmony export */   \"default\": () => /* binding */ nogamma\n/* harmony export */ });\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ \"./node_modules/d3-interpolate/src/constant.js\");\n\n\nfunction linear(a, d) {\n  return function(t) {\n    return a + t * d;\n  };\n}\n\nfunction exponential(a, b, y) {\n  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {\n    return Math.pow(a + t * b, y);\n  };\n}\n\nfunction hue(a, b) {\n  var d = b - a;\n  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.default)(isNaN(a) ? b : a);\n}\n\nfunction gamma(y) {\n  return (y = +y) === 1 ? nogamma : function(a, b) {\n    return b - a ? exponential(a, b, y) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.default)(isNaN(a) ? b : a);\n  };\n}\n\nfunction nogamma(a, b) {\n  var d = b - a;\n  return d ? linear(a, d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.default)(isNaN(a) ? b : a);\n}\n\n\n//# sourceURL=webpack://TweenTitan/./node_modules/d3-interpolate/src/color.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);\n\n\n//# sourceURL=webpack://TweenTitan/./node_modules/d3-interpolate/src/constant.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/date.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/date.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {\n  var d = new Date;\n  return a = +a, b = +b, function(t) {\n    return d.setTime(a * (1 - t) + b * t), d;\n  };\n}\n\n\n//# sourceURL=webpack://TweenTitan/./node_modules/d3-interpolate/src/date.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {\n  return a = +a, b = +b, function(t) {\n    return a * (1 - t) + b * t;\n  };\n}\n\n\n//# sourceURL=webpack://TweenTitan/./node_modules/d3-interpolate/src/number.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/numberArray.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/numberArray.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__,\n/* harmony export */   \"isNumberArray\": () => /* binding */ isNumberArray\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {\n  if (!b) b = [];\n  var n = a ? Math.min(b.length, a.length) : 0,\n      c = b.slice(),\n      i;\n  return function(t) {\n    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;\n    return c;\n  };\n}\n\nfunction isNumberArray(x) {\n  return ArrayBuffer.isView(x) && !(x instanceof DataView);\n}\n\n\n//# sourceURL=webpack://TweenTitan/./node_modules/d3-interpolate/src/numberArray.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/object.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/object.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ \"./node_modules/d3-interpolate/src/value.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {\n  var i = {},\n      c = {},\n      k;\n\n  if (a === null || typeof a !== \"object\") a = {};\n  if (b === null || typeof b !== \"object\") b = {};\n\n  for (k in b) {\n    if (k in a) {\n      i[k] = (0,_value_js__WEBPACK_IMPORTED_MODULE_0__.default)(a[k], b[k]);\n    } else {\n      c[k] = b[k];\n    }\n  }\n\n  return function(t) {\n    for (k in i) c[k] = i[k](t);\n    return c;\n  };\n}\n\n\n//# sourceURL=webpack://TweenTitan/./node_modules/d3-interpolate/src/object.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__,\n/* harmony export */   \"rgbBasis\": () => /* binding */ rgbBasis,\n/* harmony export */   \"rgbBasisClosed\": () => /* binding */ rgbBasisClosed\n/* harmony export */ });\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/color.js\");\n/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis.js */ \"./node_modules/d3-interpolate/src/basis.js\");\n/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed.js */ \"./node_modules/d3-interpolate/src/basisClosed.js\");\n/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ \"./node_modules/d3-interpolate/src/color.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function rgbGamma(y) {\n  var color = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__.gamma)(y);\n\n  function rgb(start, end) {\n    var r = color((start = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(start)).r, (end = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(end)).r),\n        g = color(start.g, end.g),\n        b = color(start.b, end.b),\n        opacity = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__.default)(start.opacity, end.opacity);\n    return function(t) {\n      start.r = r(t);\n      start.g = g(t);\n      start.b = b(t);\n      start.opacity = opacity(t);\n      return start + \"\";\n    };\n  }\n\n  rgb.gamma = rgbGamma;\n\n  return rgb;\n})(1));\n\nfunction rgbSpline(spline) {\n  return function(colors) {\n    var n = colors.length,\n        r = new Array(n),\n        g = new Array(n),\n        b = new Array(n),\n        i, color;\n    for (i = 0; i < n; ++i) {\n      color = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(colors[i]);\n      r[i] = color.r || 0;\n      g[i] = color.g || 0;\n      b[i] = color.b || 0;\n    }\n    r = spline(r);\n    g = spline(g);\n    b = spline(b);\n    color.opacity = 1;\n    return function(t) {\n      color.r = r(t);\n      color.g = g(t);\n      color.b = b(t);\n      return color + \"\";\n    };\n  };\n}\n\nvar rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_2__.default);\nvar rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_3__.default);\n\n\n//# sourceURL=webpack://TweenTitan/./node_modules/d3-interpolate/src/rgb.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ \"./node_modules/d3-interpolate/src/number.js\");\n\n\nvar reA = /[-+]?(?:\\d+\\.?\\d*|\\.?\\d+)(?:[eE][-+]?\\d+)?/g,\n    reB = new RegExp(reA.source, \"g\");\n\nfunction zero(b) {\n  return function() {\n    return b;\n  };\n}\n\nfunction one(b) {\n  return function(t) {\n    return b(t) + \"\";\n  };\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {\n  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b\n      am, // current match in a\n      bm, // current match in b\n      bs, // string preceding current number in b, if any\n      i = -1, // index in s\n      s = [], // string constants and placeholders\n      q = []; // number interpolators\n\n  // Coerce inputs to strings.\n  a = a + \"\", b = b + \"\";\n\n  // Interpolate pairs of numbers in a & b.\n  while ((am = reA.exec(a))\n      && (bm = reB.exec(b))) {\n    if ((bs = bm.index) > bi) { // a string precedes the next number in b\n      bs = b.slice(bi, bs);\n      if (s[i]) s[i] += bs; // coalesce with previous string\n      else s[++i] = bs;\n    }\n    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match\n      if (s[i]) s[i] += bm; // coalesce with previous string\n      else s[++i] = bm;\n    } else { // interpolate non-matching numbers\n      s[++i] = null;\n      q.push({i: i, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__.default)(am, bm)});\n    }\n    bi = reB.lastIndex;\n  }\n\n  // Add remains of b.\n  if (bi < b.length) {\n    bs = b.slice(bi);\n    if (s[i]) s[i] += bs; // coalesce with previous string\n    else s[++i] = bs;\n  }\n\n  // Special optimization for only a single match.\n  // Otherwise, interpolate each of the numbers and rejoin the string.\n  return s.length < 2 ? (q[0]\n      ? one(q[0].x)\n      : zero(b))\n      : (b = q.length, function(t) {\n          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);\n          return s.join(\"\");\n        });\n}\n\n\n//# sourceURL=webpack://TweenTitan/./node_modules/d3-interpolate/src/string.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/value.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/value.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/color.js\");\n/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rgb.js */ \"./node_modules/d3-interpolate/src/rgb.js\");\n/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array.js */ \"./node_modules/d3-interpolate/src/array.js\");\n/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date.js */ \"./node_modules/d3-interpolate/src/date.js\");\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number.js */ \"./node_modules/d3-interpolate/src/number.js\");\n/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./object.js */ \"./node_modules/d3-interpolate/src/object.js\");\n/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string.js */ \"./node_modules/d3-interpolate/src/string.js\");\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ \"./node_modules/d3-interpolate/src/constant.js\");\n/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./numberArray.js */ \"./node_modules/d3-interpolate/src/numberArray.js\");\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {\n  var t = typeof b, c;\n  return b == null || t === \"boolean\" ? (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.default)(b)\n      : (t === \"number\" ? _number_js__WEBPACK_IMPORTED_MODULE_1__.default\n      : t === \"string\" ? ((c = (0,d3_color__WEBPACK_IMPORTED_MODULE_2__.default)(b)) ? (b = c, _rgb_js__WEBPACK_IMPORTED_MODULE_3__.default) : _string_js__WEBPACK_IMPORTED_MODULE_4__.default)\n      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_2__.default ? _rgb_js__WEBPACK_IMPORTED_MODULE_3__.default\n      : b instanceof Date ? _date_js__WEBPACK_IMPORTED_MODULE_5__.default\n      : (0,_numberArray_js__WEBPACK_IMPORTED_MODULE_6__.isNumberArray)(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_6__.default\n      : Array.isArray(b) ? _array_js__WEBPACK_IMPORTED_MODULE_7__.genericArray\n      : typeof b.valueOf !== \"function\" && typeof b.toString !== \"function\" || isNaN(b) ? _object_js__WEBPACK_IMPORTED_MODULE_8__.default\n      : _number_js__WEBPACK_IMPORTED_MODULE_1__.default)(a, b);\n}\n\n\n//# sourceURL=webpack://TweenTitan/./node_modules/d3-interpolate/src/value.js?");

/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** Used as the `TypeError` message for \"Functions\" methods. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max,\n    nativeMin = Math.min;\n\n/**\n * Gets the timestamp of the number of milliseconds that have elapsed since\n * the Unix epoch (1 January 1970 00:00:00 UTC).\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Date\n * @returns {number} Returns the timestamp.\n * @example\n *\n * _.defer(function(stamp) {\n *   console.log(_.now() - stamp);\n * }, _.now());\n * // => Logs the number of milliseconds it took for the deferred invocation.\n */\nvar now = function() {\n  return root.Date.now();\n};\n\n/**\n * Creates a debounced function that delays invoking `func` until after `wait`\n * milliseconds have elapsed since the last time the debounced function was\n * invoked. The debounced function comes with a `cancel` method to cancel\n * delayed `func` invocations and a `flush` method to immediately invoke them.\n * Provide `options` to indicate whether `func` should be invoked on the\n * leading and/or trailing edge of the `wait` timeout. The `func` is invoked\n * with the last arguments provided to the debounced function. Subsequent\n * calls to the debounced function return the result of the last `func`\n * invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the debounced function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.debounce` and `_.throttle`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to debounce.\n * @param {number} [wait=0] The number of milliseconds to delay.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=false]\n *  Specify invoking on the leading edge of the timeout.\n * @param {number} [options.maxWait]\n *  The maximum time `func` is allowed to be delayed before it's invoked.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new debounced function.\n * @example\n *\n * // Avoid costly calculations while the window size is in flux.\n * jQuery(window).on('resize', _.debounce(calculateLayout, 150));\n *\n * // Invoke `sendMail` when clicked, debouncing subsequent calls.\n * jQuery(element).on('click', _.debounce(sendMail, 300, {\n *   'leading': true,\n *   'trailing': false\n * }));\n *\n * // Ensure `batchLog` is invoked once after 1 second of debounced calls.\n * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });\n * var source = new EventSource('/stream');\n * jQuery(source).on('message', debounced);\n *\n * // Cancel the trailing debounced invocation.\n * jQuery(window).on('popstate', debounced.cancel);\n */\nfunction debounce(func, wait, options) {\n  var lastArgs,\n      lastThis,\n      maxWait,\n      result,\n      timerId,\n      lastCallTime,\n      lastInvokeTime = 0,\n      leading = false,\n      maxing = false,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  wait = toNumber(wait) || 0;\n  if (isObject(options)) {\n    leading = !!options.leading;\n    maxing = 'maxWait' in options;\n    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n\n  function invokeFunc(time) {\n    var args = lastArgs,\n        thisArg = lastThis;\n\n    lastArgs = lastThis = undefined;\n    lastInvokeTime = time;\n    result = func.apply(thisArg, args);\n    return result;\n  }\n\n  function leadingEdge(time) {\n    // Reset any `maxWait` timer.\n    lastInvokeTime = time;\n    // Start the timer for the trailing edge.\n    timerId = setTimeout(timerExpired, wait);\n    // Invoke the leading edge.\n    return leading ? invokeFunc(time) : result;\n  }\n\n  function remainingWait(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime,\n        result = wait - timeSinceLastCall;\n\n    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;\n  }\n\n  function shouldInvoke(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime;\n\n    // Either this is the first call, activity has stopped and we're at the\n    // trailing edge, the system time has gone backwards and we're treating\n    // it as the trailing edge, or we've hit the `maxWait` limit.\n    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||\n      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));\n  }\n\n  function timerExpired() {\n    var time = now();\n    if (shouldInvoke(time)) {\n      return trailingEdge(time);\n    }\n    // Restart the timer.\n    timerId = setTimeout(timerExpired, remainingWait(time));\n  }\n\n  function trailingEdge(time) {\n    timerId = undefined;\n\n    // Only invoke if we have `lastArgs` which means `func` has been\n    // debounced at least once.\n    if (trailing && lastArgs) {\n      return invokeFunc(time);\n    }\n    lastArgs = lastThis = undefined;\n    return result;\n  }\n\n  function cancel() {\n    if (timerId !== undefined) {\n      clearTimeout(timerId);\n    }\n    lastInvokeTime = 0;\n    lastArgs = lastCallTime = lastThis = timerId = undefined;\n  }\n\n  function flush() {\n    return timerId === undefined ? result : trailingEdge(now());\n  }\n\n  function debounced() {\n    var time = now(),\n        isInvoking = shouldInvoke(time);\n\n    lastArgs = arguments;\n    lastThis = this;\n    lastCallTime = time;\n\n    if (isInvoking) {\n      if (timerId === undefined) {\n        return leadingEdge(lastCallTime);\n      }\n      if (maxing) {\n        // Handle invocations in a tight loop.\n        timerId = setTimeout(timerExpired, wait);\n        return invokeFunc(lastCallTime);\n      }\n    }\n    if (timerId === undefined) {\n      timerId = setTimeout(timerExpired, wait);\n    }\n    return result;\n  }\n  debounced.cancel = cancel;\n  debounced.flush = flush;\n  return debounced;\n}\n\n/**\n * Creates a throttled function that only invokes `func` at most once per\n * every `wait` milliseconds. The throttled function comes with a `cancel`\n * method to cancel delayed `func` invocations and a `flush` method to\n * immediately invoke them. Provide `options` to indicate whether `func`\n * should be invoked on the leading and/or trailing edge of the `wait`\n * timeout. The `func` is invoked with the last arguments provided to the\n * throttled function. Subsequent calls to the throttled function return the\n * result of the last `func` invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the throttled function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.throttle` and `_.debounce`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to throttle.\n * @param {number} [wait=0] The number of milliseconds to throttle invocations to.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=true]\n *  Specify invoking on the leading edge of the timeout.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new throttled function.\n * @example\n *\n * // Avoid excessively updating the position while scrolling.\n * jQuery(window).on('scroll', _.throttle(updatePosition, 100));\n *\n * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.\n * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });\n * jQuery(element).on('click', throttled);\n *\n * // Cancel the trailing throttled invocation.\n * jQuery(window).on('popstate', throttled.cancel);\n */\nfunction throttle(func, wait, options) {\n  var leading = true,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  if (isObject(options)) {\n    leading = 'leading' in options ? !!options.leading : leading;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n  return debounce(func, wait, {\n    'leading': leading,\n    'maxWait': wait,\n    'trailing': trailing\n  });\n}\n\n/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && objectToString.call(value) == symbolTag);\n}\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = throttle;\n\n\n//# sourceURL=webpack://TweenTitan/./node_modules/lodash.throttle/index.js?");

/***/ }),

/***/ "./src/Tween/create/index.js":
/*!***********************************!*\
  !*** ./src/Tween/create/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var Common_addListener_resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Common/addListener/resize */ \"./src/common/addListener/resize.js\");\n/* harmony import */ var Common_removeListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/removeListener */ \"./src/common/removeListener.js\");\n/* harmony import */ var Common_refresh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/refresh */ \"./src/common/refresh/index.js\");\n\n\n\n\nconst create = (mode, opts = {}) => {\n  const {\n    target,\n    waypoints = [{ percent: 0, style: {} }, { percent: 1, style: {} }],\n    margin = 0,\n    stepFunction,\n    applyStyles = true,\n  } = opts;\n\n  if (!target || waypoints.length === 0) {\n    return {\n      destroy: () => {},\n      store: {\n        style: {},\n      },\n    };\n  }\n\n  const store = {};\n  store.update = (key, value) => {\n    store[key] = value;\n  };\n\n  store.resizeFunction = (0,Common_addListener_resize__WEBPACK_IMPORTED_MODULE_0__.default)({\n    mode,\n    target,\n    waypoints,\n    margin,\n    stepFunction,\n    applyStyles,\n    store,\n  });\n\n  const refreshTween = () => (0,Common_refresh__WEBPACK_IMPORTED_MODULE_2__.default)({\n    mode,\n    store,\n    target,\n    waypoints,\n    margin,\n    stepFunction,\n    applyStyles,\n  });\n  refreshTween();\n\n  return {\n    target,\n    destroy: () => {\n      (0,Common_removeListener__WEBPACK_IMPORTED_MODULE_1__.default)('scroll', store.scrollFunction);\n      (0,Common_removeListener__WEBPACK_IMPORTED_MODULE_1__.default)('resize', store.resizeFunction);\n    },\n    store,\n    refresh: refreshTween,\n    style: {},\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create);\n\n\n//# sourceURL=webpack://TweenTitan/./src/Tween/create/index.js?");

/***/ }),

/***/ "./src/Tween/index.js":
/*!****************************!*\
  !*** ./src/Tween/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/Tween/create/index.js\");\n\n\nconst Tween = (mode) => ({\n  create: (opts) => (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(mode, opts),\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tween);\n\n\n//# sourceURL=webpack://TweenTitan/./src/Tween/index.js?");

/***/ }),

/***/ "./src/common/addListener/resize.js":
/*!******************************************!*\
  !*** ./src/common/addListener/resize.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.throttle */ \"./node_modules/lodash.throttle/index.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var Constants_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Constants/main */ \"./src/constants/main.js\");\n/* harmony import */ var Common_refresh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/refresh */ \"./src/common/refresh/index.js\");\n\n\n\n\nconst addResizeListener = (opts) => {\n  const throttledFunction = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(() => (0,Common_refresh__WEBPACK_IMPORTED_MODULE_2__.default)(opts),\n    Constants_main__WEBPACK_IMPORTED_MODULE_1__.default);\n\n  window.addEventListener('resize', throttledFunction);\n\n  return throttledFunction;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addResizeListener);\n\n\n//# sourceURL=webpack://TweenTitan/./src/common/addListener/resize.js?");

/***/ }),

/***/ "./src/common/addListener/scroll.js":
/*!******************************************!*\
  !*** ./src/common/addListener/scroll.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.throttle */ \"./node_modules/lodash.throttle/index.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var Constants_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Constants/main */ \"./src/constants/main.js\");\n/* harmony import */ var Common_getPositions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/getPositions */ \"./src/common/getPositions.js\");\n/* harmony import */ var Common_paintTween__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Common/paintTween */ \"./src/common/paintTween/index.js\");\n\n\n\n\n\nconst addScrollListener = (opts) => {\n  const {\n    mode,\n    target,\n    waypoints,\n    margin,\n    stepFunction,\n    store,\n    applyStyles,\n  } = opts;\n\n  const { targetY, viewportHeight } = (0,Common_getPositions__WEBPACK_IMPORTED_MODULE_2__.default)(target);\n\n  const throttledFunction = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(\n    () => (0,Common_paintTween__WEBPACK_IMPORTED_MODULE_3__.default)({\n      mode,\n      target,\n      waypoints,\n      margin,\n      stepFunction,\n      store,\n      targetY,\n      viewportHeight,\n      applyStyles,\n    }),\n    Constants_main__WEBPACK_IMPORTED_MODULE_1__.default,\n  );\n\n  window.addEventListener('scroll', throttledFunction);\n\n  return throttledFunction;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addScrollListener);\n\n\n//# sourceURL=webpack://TweenTitan/./src/common/addListener/scroll.js?");

/***/ }),

/***/ "./src/common/getPositions.js":
/*!************************************!*\
  !*** ./src/common/getPositions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst getPositions = (target) => ({\n  targetY: target.getBoundingClientRect().top + window.scrollY,\n  viewportHeight: window.innerHeight,\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPositions);\n\n\n//# sourceURL=webpack://TweenTitan/./src/common/getPositions.js?");

/***/ }),

/***/ "./src/common/normalize/convertNodesToPercents.js":
/*!********************************************************!*\
  !*** ./src/common/normalize/convertNodesToPercents.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var Common_getPositions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Common/getPositions */ \"./src/common/getPositions.js\");\n/* harmony import */ var Common_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/normalize */ \"./src/common/normalize/index.js\");\n\n\n\nconst calculateWaypoints = (waypoints) => {\n  const pixelWaypoints = waypoints.map((waypoint) => {\n    const { targetY } = (0,Common_getPositions__WEBPACK_IMPORTED_MODULE_0__.default)(waypoint.elem);\n    return {\n      ...waypoint,\n      yPos: targetY,\n    };\n  });\n\n  pixelWaypoints.sort((a, b) => a.yPos - b.yPos);\n  const firstYPos = pixelWaypoints[0].yPos;\n  const lastYPos = pixelWaypoints[pixelWaypoints.length - 1].yPos;\n\n  const percentWaypoints = pixelWaypoints.map((waypoint) => {\n    const { yPos } = waypoint;\n    return {\n      ...waypoint,\n      percent: (yPos - firstYPos) / (lastYPos - firstYPos),\n    };\n  });\n\n  return (0,Common_normalize__WEBPACK_IMPORTED_MODULE_1__.default)(percentWaypoints);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculateWaypoints);\n\n\n//# sourceURL=webpack://TweenTitan/./src/common/normalize/convertNodesToPercents.js?");

/***/ }),

/***/ "./src/common/normalize/index.js":
/*!***************************************!*\
  !*** ./src/common/normalize/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst normalizeWaypoints = (waypoints) => {\n  const properties = {};\n  const normalizedWaypoints = [];\n\n  // If some waypoints have properties that other waypoints don't,\n  // let's add those properties to all waypoints consistently\n  waypoints.forEach((waypoint) => {\n    const { style } = waypoint;\n    Object.entries(style).forEach(([key, value]) => {\n      properties[key] = value;\n    });\n\n    normalizedWaypoints.push({\n      ...waypoint,\n      style: {\n        ...properties,\n      },\n    });\n  });\n\n  // If the waypoints array doesn't start with percent=0, or doesn't\n  // end with percent=1, add those values\n\n  if (normalizedWaypoints[0].percent !== 0) {\n    normalizedWaypoints.unshift({\n      percent: 0,\n      style: normalizedWaypoints[0].style,\n    });\n  }\n  const endIndex = normalizedWaypoints.length - 1;\n  if (normalizedWaypoints[endIndex].percent !== 1) {\n    normalizedWaypoints.push({\n      percent: 1,\n      style: normalizedWaypoints[endIndex].style,\n    });\n  }\n\n  return normalizedWaypoints;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (normalizeWaypoints);\n\n\n//# sourceURL=webpack://TweenTitan/./src/common/normalize/index.js?");

/***/ }),

/***/ "./src/common/paintTween/applyStyles/index.js":
/*!****************************************************!*\
  !*** ./src/common/paintTween/applyStyles/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst applyStyles = ({ target, style }) => {\n  Object.entries(style).forEach(([key, value]) => {\n    target.style[key] = value; // eslint-disable-line no-param-reassign\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applyStyles);\n\n\n//# sourceURL=webpack://TweenTitan/./src/common/paintTween/applyStyles/index.js?");

/***/ }),

/***/ "./src/common/paintTween/getPercentage/TweenSelf/index.js":
/*!****************************************************************!*\
  !*** ./src/common/paintTween/getPercentage/TweenSelf/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst TweenSelf = ({\n  margin,\n  targetY,\n  viewportHeight,\n}) => {\n  const userY = window.scrollY;\n  const { top = 0, bottom = 0 } = margin;\n  const baselineY = userY + viewportHeight - (targetY - top);\n  const runway = viewportHeight + top + bottom;\n  const percentage = baselineY / runway;\n\n  return percentage;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TweenSelf);\n\n\n//# sourceURL=webpack://TweenTitan/./src/common/paintTween/getPercentage/TweenSelf/index.js?");

/***/ }),

/***/ "./src/common/paintTween/getPercentage/TweenWaypoints/index.js":
/*!*********************************************************************!*\
  !*** ./src/common/paintTween/getPercentage/TweenWaypoints/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst TweenWaypoints = (opts) => {\n  const { viewportHeight, waypoints, margin = 0 } = opts;\n  const { scrollY } = window;\n\n  const firstYPos = waypoints[0].yPos;\n  const lastYPos = waypoints[waypoints.length - 1].yPos;\n\n  const percentage = ((scrollY + viewportHeight - margin) - firstYPos)\n    / (lastYPos - firstYPos);\n\n  return percentage;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TweenWaypoints);\n\n\n//# sourceURL=webpack://TweenTitan/./src/common/paintTween/getPercentage/TweenWaypoints/index.js?");

/***/ }),

/***/ "./src/common/paintTween/getPercentage/index.js":
/*!******************************************************!*\
  !*** ./src/common/paintTween/getPercentage/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _TweenSelf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenSelf */ \"./src/common/paintTween/getPercentage/TweenSelf/index.js\");\n/* harmony import */ var _TweenWaypoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TweenWaypoints */ \"./src/common/paintTween/getPercentage/TweenWaypoints/index.js\");\n\n\n\nconst getPercentage = (opts) => {\n  const { mode } = opts;\n\n  if (mode === 'TweenWaypoints') {\n    return (0,_TweenWaypoints__WEBPACK_IMPORTED_MODULE_1__.default)(opts);\n  }\n\n  return (0,_TweenSelf__WEBPACK_IMPORTED_MODULE_0__.default)(opts);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPercentage);\n\n\n//# sourceURL=webpack://TweenTitan/./src/common/paintTween/getPercentage/index.js?");

/***/ }),

/***/ "./src/common/paintTween/index.js":
/*!****************************************!*\
  !*** ./src/common/paintTween/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _interpolateStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interpolateStyles */ \"./src/common/paintTween/interpolateStyles/index.js\");\n/* harmony import */ var _getPercentage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPercentage */ \"./src/common/paintTween/getPercentage/index.js\");\n/* harmony import */ var _applyStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applyStyles */ \"./src/common/paintTween/applyStyles/index.js\");\n/* harmony import */ var _utils_bounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/bounds */ \"./src/common/paintTween/utils/bounds.js\");\n\n\n\n\n\nconst paintTween = (opts) => {\n  const {\n    mode,\n    target,\n    waypoints,\n    margin,\n    targetY,\n    viewportHeight,\n    stepFunction,\n    store,\n    applyStyles: applyStylesFlag,\n  } = opts;\n\n  const rawPercentage = (0,_getPercentage__WEBPACK_IMPORTED_MODULE_1__.default)({\n    mode, margin, viewportHeight, targetY, waypoints,\n  });\n\n  if (rawPercentage >= -0.3 && rawPercentage <= 1.3) {\n    const percentage = (0,_utils_bounds__WEBPACK_IMPORTED_MODULE_3__.default)(rawPercentage);\n    const style = (0,_interpolateStyles__WEBPACK_IMPORTED_MODULE_0__.default)({ waypoints, percentage });\n\n    store.update('style', style);\n    if (applyStylesFlag) {\n      (0,_applyStyles__WEBPACK_IMPORTED_MODULE_2__.default)({ target, style });\n    }\n\n    if (stepFunction) {\n      stepFunction(percentage, style, target);\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paintTween);\n\n\n//# sourceURL=webpack://TweenTitan/./src/common/paintTween/index.js?");

/***/ }),

/***/ "./src/common/paintTween/interpolateStyles/getRelativePercent/index.js":
/*!*****************************************************************************!*\
  !*** ./src/common/paintTween/interpolateStyles/getRelativePercent/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst getRelativePercent = ({\n  bounds,\n  percentage,\n}) => (percentage - bounds[0]) / (bounds[1] - bounds[0]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRelativePercent);\n\n\n//# sourceURL=webpack://TweenTitan/./src/common/paintTween/interpolateStyles/getRelativePercent/index.js?");

/***/ }),

/***/ "./src/common/paintTween/interpolateStyles/getTweenPoints/index.js":
/*!*************************************************************************!*\
  !*** ./src/common/paintTween/interpolateStyles/getTweenPoints/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst getTweenPoints = ({ waypoints, percentage }) => {\n  waypoints.sort((a, b) => a.percent - b.percent);\n\n  let index;\n  waypoints.some((point, i) => {\n    const nextPoint = waypoints[i + 1];\n    if (!nextPoint) {\n      return false;\n    }\n    if (percentage >= point.percent && percentage < nextPoint.percent) {\n      index = i;\n      return true;\n    }\n    return false;\n  });\n\n  if (index === undefined) {\n    index = waypoints.length - 2;\n  }\n\n  return [waypoints[index], waypoints[index + 1]];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTweenPoints);\n\n\n//# sourceURL=webpack://TweenTitan/./src/common/paintTween/interpolateStyles/getTweenPoints/index.js?");

/***/ }),

/***/ "./src/common/paintTween/interpolateStyles/index.js":
/*!**********************************************************!*\
  !*** ./src/common/paintTween/interpolateStyles/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _getTweenPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTweenPoints */ \"./src/common/paintTween/interpolateStyles/getTweenPoints/index.js\");\n/* harmony import */ var _getRelativePercent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getRelativePercent */ \"./src/common/paintTween/interpolateStyles/getRelativePercent/index.js\");\n\n\n\nconst interpolateStyles = ({ waypoints, percentage }) => {\n  const points = (0,_getTweenPoints__WEBPACK_IMPORTED_MODULE_0__.default)({ waypoints, percentage });\n  const { interpolator } = points[0];\n\n  const relativePercent = (0,_getRelativePercent__WEBPACK_IMPORTED_MODULE_1__.default)({\n    bounds: [points[0].percent, points[1].percent],\n    percentage,\n  });\n\n  return interpolator(relativePercent);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interpolateStyles);\n\n\n//# sourceURL=webpack://TweenTitan/./src/common/paintTween/interpolateStyles/index.js?");

/***/ }),

/***/ "./src/common/paintTween/utils/bounds.js":
/*!***********************************************!*\
  !*** ./src/common/paintTween/utils/bounds.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((rawPercentage) => {\n  if (rawPercentage < 0) {\n    return 0;\n  }\n\n  if (rawPercentage > 1) {\n    return 1;\n  }\n\n  return rawPercentage;\n});\n\n\n//# sourceURL=webpack://TweenTitan/./src/common/paintTween/utils/bounds.js?");

/***/ }),

/***/ "./src/common/refresh/createInterpolators/index.js":
/*!*********************************************************!*\
  !*** ./src/common/refresh/createInterpolators/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ \"./node_modules/d3-interpolate/src/object.js\");\n\n\nconst createInterpolators = (waypoints) => waypoints\n  .sort((a, b) => a.percent - b.percent)\n  .map((point, i) => {\n    const nextPoint = waypoints[i + 1];\n    if (!nextPoint) {\n      return point;\n    }\n    return {\n      ...point,\n      interpolator: (0,d3_interpolate__WEBPACK_IMPORTED_MODULE_0__.default)(point.style, nextPoint.style),\n    };\n  });\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInterpolators);\n\n\n//# sourceURL=webpack://TweenTitan/./src/common/refresh/createInterpolators/index.js?");

/***/ }),

/***/ "./src/common/refresh/index.js":
/*!*************************************!*\
  !*** ./src/common/refresh/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var Common_removeListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Common/removeListener */ \"./src/common/removeListener.js\");\n/* harmony import */ var Common_paintTween__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/paintTween */ \"./src/common/paintTween/index.js\");\n/* harmony import */ var Common_getPositions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/getPositions */ \"./src/common/getPositions.js\");\n/* harmony import */ var Common_normalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Common/normalize */ \"./src/common/normalize/index.js\");\n/* harmony import */ var Common_normalize_convertNodesToPercents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/normalize/convertNodesToPercents */ \"./src/common/normalize/convertNodesToPercents.js\");\n/* harmony import */ var Common_addListener_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Common/addListener/scroll */ \"./src/common/addListener/scroll.js\");\n/* harmony import */ var _createInterpolators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createInterpolators */ \"./src/common/refresh/createInterpolators/index.js\");\n\n\n\n\n\n\n\n\nconst refresh = (opts) => {\n  const {\n    mode,\n    store,\n    target,\n    waypoints: rawWaypoints,\n    margin,\n    stepFunction,\n    applyStyles,\n  } = opts;\n\n  const { scrollFunction } = store;\n  if (scrollFunction) {\n    (0,Common_removeListener__WEBPACK_IMPORTED_MODULE_0__.default)('scroll', scrollFunction);\n  }\n\n  const { targetY, viewportHeight } = (0,Common_getPositions__WEBPACK_IMPORTED_MODULE_2__.default)(target);\n\n  const normalizedWaypoints = mode === 'TweenSelf'\n    ? (0,Common_normalize__WEBPACK_IMPORTED_MODULE_3__.default)(rawWaypoints)\n    : (0,Common_normalize_convertNodesToPercents__WEBPACK_IMPORTED_MODULE_4__.default)(rawWaypoints);\n\n  const waypoints = (0,_createInterpolators__WEBPACK_IMPORTED_MODULE_6__.default)(normalizedWaypoints);\n\n  const newEvent = (0,Common_addListener_scroll__WEBPACK_IMPORTED_MODULE_5__.default)({\n    mode,\n    target,\n    waypoints,\n    margin,\n    stepFunction,\n    store,\n    applyStyles,\n  });\n\n  (0,Common_paintTween__WEBPACK_IMPORTED_MODULE_1__.default)({\n    mode,\n    target,\n    waypoints,\n    margin,\n    targetY,\n    viewportHeight,\n    stepFunction,\n    store,\n    applyStyles,\n  });\n\n  store.update('scrollFunction', newEvent);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refresh);\n\n\n//# sourceURL=webpack://TweenTitan/./src/common/refresh/index.js?");

/***/ }),

/***/ "./src/common/removeListener.js":
/*!**************************************!*\
  !*** ./src/common/removeListener.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst removeListener = (type, eventFunction) => {\n  window.removeEventListener(type, eventFunction);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeListener);\n\n\n//# sourceURL=webpack://TweenTitan/./src/common/removeListener.js?");

/***/ }),

/***/ "./src/constants/main.js":
/*!*******************************!*\
  !*** ./src/constants/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SCROLL_THROTTLE_THRESHOLD\": () => /* binding */ SCROLL_THROTTLE_THRESHOLD,\n/* harmony export */   \"RESIZE_THROTTLE_THRESHOLD\": () => /* binding */ RESIZE_THROTTLE_THRESHOLD\n/* harmony export */ });\nconst SCROLL_THROTTLE_THRESHOLD = 20;\nconst RESIZE_THROTTLE_THRESHOLD = 100;\n\n\n//# sourceURL=webpack://TweenTitan/./src/constants/main.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TweenSelf\": () => /* binding */ TweenSelf,\n/* harmony export */   \"TweenWaypoints\": () => /* binding */ TweenWaypoints\n/* harmony export */ });\n/* harmony import */ var _Tween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tween */ \"./src/Tween/index.js\");\n\n\nconst TweenSelf = (0,_Tween__WEBPACK_IMPORTED_MODULE_0__.default)('TweenSelf');\nconst TweenWaypoints = (0,_Tween__WEBPACK_IMPORTED_MODULE_0__.default)('TweenWaypoints');\n\n\n\n\n//# sourceURL=webpack://TweenTitan/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});