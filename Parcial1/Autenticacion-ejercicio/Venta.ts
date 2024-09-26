import { Cliente } from "./Cliente"
import { BombonesStrategy } from "./Estrategias-descuentos/BombonesStrategy"
import { ClientesEspecialesStrategy } from "./Estrategias-descuentos/ClientesEspecialesStrategy"
import { ClientesMayoresStrategy } from "./Estrategias-descuentos/ClientesMayoresStrategy"
import { DescuentoCompuestoStrategy } from "./Estrategias-descuentos/DescuentoCompuestoStrategy"
import { LunesStrategy } from "./Estrategias-descuentos/LunesStrategy"
import { Producto } from "./Producto"
import { Strategy } from "./Strategy"

export class Venta {
    private fecha_venta: Date
    private monto_total: number
    private comprador: Cliente
    private productos_vendidos: Producto[]
    private descuento?: Strategy

    constructor(
        fecha_venta: Date,
        monto_total: number,
        comprador: Cliente,
        productos_vendidos: Producto[],
    ) {
        this.fecha_venta = fecha_venta
        this.monto_total = monto_total
        this.comprador = comprador
        this.productos_vendidos = productos_vendidos
    }

    private set Descuento(d: Strategy) {
        this.descuento = d
    }

    get Monto_total() {
        return this.monto_total
    }

    get Productos() {
        return this.productos_vendidos
    }

    get Comprador() {
        return this.comprador
    }

    get Descuento(){
        if(this.descuento) return this.descuento
        throw Error
    }

    private getDiaDeVenta() {
        const diasDeLaSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
        const indice = this.fecha_venta.getDay();
        return diasDeLaSemana[indice];
    }

    private determinarDescuento(){
        const descuentoCompuesto = new DescuentoCompuestoStrategy()
        if (this.productos_vendidos.some(producto => producto.Nombre == "Bombones La Muerte")) {
            const bombonesStrategy = new BombonesStrategy()
            descuentoCompuesto.addStrategy(bombonesStrategy)
        }

        if (this.comprador.Edad > 65) {
            const edadMayorStrategy = new ClientesMayoresStrategy()
            descuentoCompuesto.addStrategy(edadMayorStrategy)
        }

        if (this.comprador.IsSpecial && this.monto_total > 400) {
            const especialStrategy = new ClientesEspecialesStrategy()
            descuentoCompuesto.addStrategy(especialStrategy)
        }

        if ((this.getDiaDeVenta() == "lunes") && (this.monto_total > 500)) {
            const lunesStrategy = new LunesStrategy()
            descuentoCompuesto.addStrategy(lunesStrategy)
        }

        if (descuentoCompuesto.Descuentos.length > 0) {
            this.descuento = descuentoCompuesto
        }
    }

    aplicarDescuento() {
        
        this.determinarDescuento()
        
        if(this.descuento){
            this.monto_total = this.descuento.obtenerDescuento(this.monto_total)
        }
        
    }

}