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