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
var Par = /** @class */ (function () {
    function Par() {
    }
    Par.prototype.cumple = function (t) {
        if (t % 2)
            return false; // Si el número es par, devuel
        return true;
    };
    return Par;
}());
var Funcion = /** @class */ (function () {
    function Funcion() {
    }
    Funcion.prototype.aplicar = function (t) {
    };
    return Funcion;
}());
var Nodo = /** @class */ (function () {
    function Nodo(valor, hijos) {
        this.valor = valor;
        this.hijos = hijos ? hijos : [];
    }
    Nodo.prototype.agregar = function (n) {
        this.hijos.push(n);
    };
    Nodo.prototype.cumplen = function (p) {
        var cont = 0;
        if (p.cumple(this.valor))
            cont++;
        if (this.hijos.length > 0) {
            this.hijos.forEach(function (n) {
                if (p.cumple(n.valor))
                    cont++;
            });
        }
        return cont;
    };
    return Nodo;
}());
var NodoCompuesto = /** @class */ (function (_super) {
    __extends(NodoCompuesto, _super);
    function NodoCompuesto(valor, nodo_interno, hijos) {
        var _this = _super.call(this, valor, hijos) || this;
        _this.nodo_interno = nodo_interno;
        // Verificar si hay un nodo interno y asignar sus hijos si está presente
        if (_this.nodo_interno) {
            _this.hijos = _this.nodo_interno.hijos;
        }
        return _this;
    }
    NodoCompuesto.prototype.cumplen = function (p) {
        var cont = 0;
        cont = _super.prototype.cumplen.call(this, p);
        console.log("cont para los hijos: ", cont);
        if (this.nodo_interno) {
            cont += this.nodo_interno.cumplen(p);
            console.log("cont para interno: ", cont);
        }
        if (p.cumple(this.valor))
            cont++;
        return cont;
    };
    return NodoCompuesto;
}(Nodo));
var n1 = new Nodo(5);
var n2 = new Nodo(2);
var n3 = new Nodo(4);
var n4 = new Nodo(2);
n1.agregar(n2);
var nc = new NodoCompuesto(5, n1, [n3, n4]);
console.log(nc);
console.log(nc.cumplen(new Par()));
