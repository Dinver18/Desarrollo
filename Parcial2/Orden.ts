import { Cliente, Direccion, Estado } from "./Cliente";

class Articulo {
    constructor(private nombre: string, private precio: number) {
        this.nombre = nombre
        this.precio = precio
    }

    // Método para obtener el precio del artículo
    getPrecio(): number {
        return this.precio;
    }
}

export class Orden {
    private monto_total: string;

    constructor(private items: Articulo[], private cliente: Cliente, monto_total: string) {
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

    getAddres(): Direccion{
        return this.cliente.getDireccion()
    }
}