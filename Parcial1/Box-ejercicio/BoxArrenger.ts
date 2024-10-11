import Box from "./Box";
import { BoxContainer } from "./BoxContainer";

export interface BoxArrenger<T>{
    add(b: Box<T>, container: BoxContainer<T>): void;
}