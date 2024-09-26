import { Cliente } from "./Cliente";
import { Producto } from "./Producto";
import { Venta } from "./Venta";

const cliente = new Cliente("Juan Pérez", new Date("1958-09-25"), true);

const producto1 = new Producto("Bombones La Muerte", 300);
const producto2 = new Producto("Chocolates", 150);
const producto3 = new Producto("Harina", 50);
const producto4 = new Producto("Helado tres sabores", 200);

const productosVendidos = [producto2, producto3, producto4];


const fechaVenta = new Date("2024-09-23");


const venta = new Venta(fechaVenta, 450, cliente, productosVendidos);

venta.aplicarDescuento()
console.log(venta.Descuento)
console.log(venta.Monto_total)
