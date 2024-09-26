import Box from "./Box";
import { BoxArrenger } from "./BoxArrenger";

export class FirstBox<T> implements BoxArrenger<T>{
    add(b: Box<T>, cajas: Box<T>[]): Box<T>[] {
        cajas.unshift(b)
        return cajas
    }
}