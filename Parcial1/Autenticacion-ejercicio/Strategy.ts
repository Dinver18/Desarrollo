import { Cliente } from "./Cliente";
import { Producto } from "./Producto";
import { Venta } from "./Venta";

export interface Strategy{
    obtenerDescuento(monto: number): number
}