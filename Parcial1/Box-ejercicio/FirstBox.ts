import Box from "./Box";
import { BoxArrenger } from "./BoxArrenger";
import { BoxContainer } from "./BoxContainer";

export class FirstBox<T> implements BoxArrenger<T>{
    add(b: Box<T>, container: BoxContainer<T>): void {
        container.cajas.unshift(b)
    }
}