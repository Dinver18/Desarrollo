import { Either } from "../Clases_Genericas/Either";
import { Producto } from "../Parcial1/Autenticacion-ejercicio/Producto";
import { Cliente, Direccion, Estado } from "./Cliente";
import { Error } from "./Error";
import { AddressHandler } from "./Manejadores/AddressHandler";
import { CreditHandler } from "./Manejadores/CreditHandler";
import { ItemsHandler } from "./Manejadores/ItemsHandler";
import { StatusHandler } from "./Manejadores/StatusHandler";
import { Articulo, Orden } from "./Orden";

const item1 = new Articulo("Leche",5,2)
const item2 = new Articulo("Galletas",2,5)
const item3 = new Articulo("Helado tres sabores",15,1)

const list = [item1,item2,item3]

const address = new Direccion("Vista Alegre")

const cliente = new Cliente("Luigi","04120145752",address,Estado.Suspendido,20,14)

let monto = 0
for(let item of list){
    monto += item.getCantidad() * item.getPrecio()
}

const orden = new Orden(list,cliente,monto)

const handler1 = new AddressHandler()
const handler2 = new CreditHandler()
const handler3 = new ItemsHandler()
const handler4 = new StatusHandler()

handler1.addHandler(handler2)
handler1.addHandler(handler4)
handler2.addHandler(handler3)

const request = Either.makeRight<Error[],Orden>(orden)
console.log(request.getRight())

/*
const resultado = handler1.handle(Either.makeRight(orden))

if(resultado.getLeft()){
    console.log(resultado.getLeft())
}*/