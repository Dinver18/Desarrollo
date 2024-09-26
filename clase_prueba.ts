class MiClase {
    obtenerNombreDeClase() {
        return this.constructor.name;
    }
}

const instancia = new MiClase();
console.log(instancia.obtenerNombreDeClase()); // Esto debería imprimir "MiClase"
