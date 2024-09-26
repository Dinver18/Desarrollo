var MiClase = /** @class */ (function () {
    function MiClase() {
    }
    MiClase.prototype.obtenerNombreDeClase = function () {
        return this.constructor.name;
    };
    return MiClase;
}());
var instancia = new MiClase();
console.log(instancia.obtenerNombreDeClase()); // Esto debería imprimir "MiClase"
