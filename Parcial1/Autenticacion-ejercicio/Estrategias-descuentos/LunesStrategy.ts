import { Strategy } from "../Strategy";
import { Venta } from "../Venta";

export class LunesStrategy implements Strategy{
    obtenerDescuento(monto: number): number {
        return monto - 50
    }
}