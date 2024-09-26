import Box from "./Box";

export interface BoxArrenger<T>{
    add(b: Box<T>, cajas: Box<T>[]): Box<T>[];
}