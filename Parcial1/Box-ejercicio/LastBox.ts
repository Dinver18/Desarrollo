import Box from "./Box";
import { BoxArrenger } from "./BoxArrenger";

export class LastBox<T> implements BoxArrenger<T>{
    add(b: Box<T>, cajas: Box<T>[]): Box<T>[] {
        cajas.push(b)
        return cajas
    }
}