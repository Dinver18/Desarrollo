import Box from "./Box";
import { BoxArrenger } from "./BoxArrenger";

export class BoxContainer<T>{
    public cajas: Box<T>[] = []
    private arrenger: BoxArrenger<T>

    constructor(arrenger:BoxArrenger<T>,cajas?: Box<T>[]){
        this.arrenger = arrenger
        if(cajas){
            this.cajas = cajas
        }
    }

    arrangeBox(b: Box<T>): void{
        this.cajas = this.arrenger.add(b,this.cajas)
    }

    setArrenger(arrenger: BoxArrenger<T>){
        this.arrenger = arrenger
    }

    getCajas(){
        return this.cajas
    }
}