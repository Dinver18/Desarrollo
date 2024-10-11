import Box from "./Box";
import { BoxArrenger } from "./BoxArrenger";
import { BoxContainer } from "./BoxContainer";

export class LastBox<T> implements BoxArrenger<T>{
    add(b: Box<T>, container: BoxContainer<T>): void {
        container.cajas.push(b)
    }
}