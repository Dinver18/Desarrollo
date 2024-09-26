import { Strategy } from "../Strategy";
import { Venta } from "../Venta";

export class ClientesEspecialesStrategy implements Strategy{
    obtenerDescuento(monto: number): number {
        return monto - (monto * 0.15)
    }
}