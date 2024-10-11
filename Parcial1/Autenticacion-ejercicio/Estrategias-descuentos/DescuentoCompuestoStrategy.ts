import { Strategy } from "../Strategy";
import { Venta } from "../Venta";

export class DescuentoCompuestoStrategy implements Strategy{

    private estrategias: Strategy[] = []

    obtenerDescuento(monto: number): number {
        let monto_descontado = monto 

        for(const d of this.estrategias){
            monto_descontado = d.obtenerDescuento(monto_descontado)
        }

        return monto_descontado
    }

    addStrategy(s: Strategy){
        this.estrategias.push(s)
    }
    
    get Descuentos(){
        return this.estrategias
    }
}