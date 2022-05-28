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