var DescuentoConcreto = /** @class */ (function () {
    function DescuentoConcreto() {
    }
    DescuentoConcreto.prototype.descuento = function (precio) {
        return precio - (precio * 0.10);
    };
    return DescuentoConcreto;
}());
var elemento = /** @class */ (function () {
    function elemento(codigo, precio) {
        this.codigo = codigo;
        this.precio = precio;
    }
    elemento.prototype.calcular = function () {
        return this.precio;
    };
    return elemento;
}());
var kit = /** @class */ (function () {
    function kit(codigo, estrategiaDecuento) {
        this.elementos = [];
        this.codigo = codigo;
        this.estrategiaDecuento = estrategiaDecuento;
    }
    kit.prototype.calcular = function () {
        var precioTotal = 0;
        for (var _i = 0, _a = this.elementos; _i < _a.length; _i++) {
            var elemento_1 = _a[_i];
            precioTotal += elemento_1.calcular();
        }
        this.precio = this.estrategiaDecuento.descuento(precioTotal);
        return this.precio;
    };
    kit.prototype.agregar = function (c) {
        this.elementos.push(c);
    };
    kit.prototype.remover = function (c) {
        var _this = this;
        var indice = 0;
        this.elementos.forEach(function (elemento) {
            if (elemento === c) {
                indice = _this.elementos.indexOf(elemento);
            }
        });
        if (indice) {
            this.elementos.splice(indice, 1);
        }
        else {
            return console.log("Elemento no encontrado");
        }
    };
    kit.prototype.getComponentes = function () {
        return this.elementos;
    };
    return kit;
}());
var elemento1 = new elemento(1, 5);
var elemento2 = new elemento(2, 10);
var elemento3 = new elemento(3, 5);
var descuento = new DescuentoConcreto();
var kit1 = new kit(1, descuento);
var kit2 = new kit(2, descuento);
kit1.agregar(elemento1);
kit1.agregar(elemento2);
kit2.agregar(elemento3);
kit1.agregar(kit2);
console.log(kit1.calcular());
