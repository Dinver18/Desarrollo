import { Cliente, Direccion, Estado } from "./Cliente";

export class Articulo {
    constructor(private nombre: string, private precio: number, private cantidad: number) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }

    // Método para obtener el precio del artículo
    getPrecio(): number {
        return this.precio;
    }

    getCantidad(){
        return this.cantidad;
    }
}

export class Orden {
    private monto_total: number;

    constructor(private items: Articulo[], private cliente: Cliente, monto_total: number) {
        this.monto_total = monto_total;
        this.cliente = cliente
        this.items = items
    }

    // Método para calcular el monto total de la orden
    getMonto(): number {
        return this.items.reduce((total, item) => total + item.getPrecio(), 0);
    }

    getStatus(): Estado{
        return this.cliente.getStatus()
    }

    get getAddres(){
        return this.cliente.getDireccion()
    }

    getClient(): Cliente{
        return this.cliente
    }

    getItems(){
        return this.items
    }
}