(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Ciente = /*#__PURE__*/function () {
  function Ciente(nombre) {
    var impuestos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Ciente);

    this._nombre = function () {
      return nombre;
    };

    this._impuestos = function () {
      return impuestos;
    };
  }

  _createClass(Ciente, [{
    key: "nombre",
    get: function get() {
      return this._nombre();
    },
    set: function set(new_nombre) {
      return this._nombre = function () {
        return new_nombre;
      };
    }
  }, {
    key: "impuestos",
    get: function get() {
      return this._impuestos();
    },
    set: function set(new_impuestos) {
      return this._impuestos = function () {
        return new_impuestos;
      };
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      var calculo = (this.impuestos.monto_bruto - this.impuestos.deducciones) * 0.21;
      return calculo;
    }
  }]);

  return Ciente;
}();

exports["default"] = Ciente;
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Impuesto = /*#__PURE__*/function () {
  function Impuesto(monto_bruto) {
    var deducciones = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Impuesto);

    this._monto_bruto = function () {
      return monto_bruto;
    };

    this._deducciones = function () {
      return deducciones;
    };
  }

  _createClass(Impuesto, [{
    key: "monto_bruto",
    get: function get() {
      return this._monto_bruto();
    },
    set: function set(new_monto_bruto) {
      return this._monto_bruto = function () {
        return new_monto_bruto;
      };
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones();
    },
    set: function set(new_deducciones) {
      return this._deducciones = function () {
        return new_deducciones;
      };
    }
  }]);

  return Impuesto;
}();

exports["default"] = Impuesto;
},{}],3:[function(require,module,exports){
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
},{"./cliente.js":1,"./impuesto.js":2}]},{},[3]);
