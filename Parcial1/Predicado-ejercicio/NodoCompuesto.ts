import { Funcion } from "./Funcion";
import { Nodo } from "./Nodo";
import { Predicado } from "./Predicado";

export class NodoCompuesto<T> extends Nodo<T>{
    public nodo_interno?: Nodo<T> 

    constructor(valor: T, hijos?: Nodo<T>[], nodo_interno?: Nodo<T>){
        super(valor,hijos)
        if(nodo_interno) this.nodo_interno = nodo_interno
    }

    cumplen(p: Predicado<T>): number{

        let contador = super.cumplen(p)

        if(this.nodo_interno){
            contador += this.nodo_interno.cumplen(p)
        }

        return contador

    }
}