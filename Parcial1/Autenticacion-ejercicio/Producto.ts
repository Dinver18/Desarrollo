export class Producto{
    
    private nombre: string
    private precio: number

    constructor(nombre: string, precio: number){
        this.nombre = nombre
        this.precio = precio
    }

    get Precio(){
        return this.precio
    }

    get Nombre(){
        return this.nombre
    }

}