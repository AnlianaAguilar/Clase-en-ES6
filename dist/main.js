"use strict";

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

var _cliente = _interopRequireDefault(require("./cliente.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto1 = new _impuesto["default"](100, 12);
var impuesto2 = new _impuesto["default"](200, 30);
console.log("impuesto1", impuesto1);
var cliente1 = new _cliente["default"]("Jose", impuesto1);
console.log(cliente1);
console.log(cliente1.calcularImpuesto());