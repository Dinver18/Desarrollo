import { Funcion } from "./Funcion";
import { Predicado } from "./Predicado";

export class Nodo<T>{
    public valor: T;
    public hijos: Nodo<T>[] = []

    constructor(valor: T, hijos?: Nodo<T>[]){
        this.valor = valor
        if(hijos) this.hijos = hijos
    }

    add(n: Nodo<T>){
        this.hijos.push(n)
    }

    cumplen(p: Predicado<T>): number{

        let contador = 0
        
        if(p.cumple(this.valor)) contador += 1

        if(this.hijos.length > 0){
            for(let hijo of this.hijos){
                if(p.cumple(hijo.valor)){
                    contador += 1
                }
            }
            return contador
        }


        return contador
    }

}