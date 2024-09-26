import { Strategy } from "../Strategy";
import { Venta } from "../Venta";

export class ClientesMayoresStrategy implements Strategy{
    obtenerDescuento(monto: number): number {
        return monto - (monto * 0.20)
    }
}