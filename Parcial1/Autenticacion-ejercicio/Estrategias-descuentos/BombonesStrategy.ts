import { Cliente } from "../Cliente";
import { Producto } from "../Producto";
import { Strategy } from "../Strategy";
import { Venta } from "../Venta";

export class BombonesStrategy implements Strategy{
    obtenerDescuento(monto: number): number {
        return monto - (monto * 0.15)
    }
}