export interface Funcion<T>{
    aplicar(t: T): void
}

export class Sumar implements Funcion<number>{
    aplicar(t: number): void {
        console.log("Valor: " + t)
        t += 2
        console.log("Cambio: " + t)
    }

}