var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Optional = /** @class */ (function () {
    function Optional(value) {
        if (value) {
            this.value = value;
            this.assigned = true;
        }
        else if (value === undefined) {
            this.value = undefined;
            this.assigned = false;
        }
        else if (value === null) {
            this.value = null;
            this.assigned = false;
        }
        else {
            this.value = undefined;
            this.assigned = false;
        }
    }
    Optional.prototype.hasValue = function () {
        return this.assigned;
    };
    Optional.prototype.getValue = function () {
        if (!this.assigned)
            throw Error();
        return this.value;
    };
    return Optional;
}());
var Celda = /** @class */ (function () {
    function Celda(valor) {
        this.valor = valor;
    }
    Celda.prototype.reducir = function (f, predicado) {
        var p = predicado(this.valor);
        if (p) {
            var optional_1 = new Optional(this.valor);
            return optional_1;
        }
        return new Optional(undefined);
    };
    return Celda;
}());
var Casilla = /** @class */ (function (_super) {
    __extends(Casilla, _super);
    function Casilla(valor) {
        var _this = _super.call(this, valor) || this;
        _this.elementos = [];
        return _this;
    }
    Casilla.prototype.reducir = function (f, predicado) {
        if (this.elementos.length >= 2) {
            var r_1 = undefined;
            if (predicado(this.valor)) {
                r_1 = this.valor;
            }
            else {
                this.elementos.forEach(function (celda) {
                    if (!r_1 && predicado(celda.valor))
                        r_1 = celda.valor;
                });
            }
            for (var _i = 0, _a = this.elementos; _i < _a.length; _i++) {
                var elemento = _a[_i];
                if (r_1) {
                    var r1 = elemento.valor;
                    if (predicado(r1)) {
                        r_1 = f(r_1, r1);
                    }
                }
            }
            return new Optional(r_1);
        }
        return new Optional();
    };
    Casilla.prototype.agregar = function (c) {
        this.elementos.push(c);
    };
    return Casilla;
}(Celda));
var c1 = new Celda(2);
var c2 = new Celda(6);
var c3 = new Celda(5);
var c4 = new Celda(2);
var f = function (n1, n2) {
    return n1 + n2;
};
var predicado = function (n1) {
    return n1 % 2 === 0;
};
var casilla = new Casilla(5);
casilla.agregar(c1);
casilla.agregar(c2);
casilla.agregar(c3);
casilla.agregar(c4);
var optional = casilla.reducir(f, predicado);
if (optional.hasValue()) {
    console.log(optional.getValue());
}
