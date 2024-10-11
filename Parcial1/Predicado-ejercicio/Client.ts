import { Funcion, Sumar } from "./Funcion";
import { Nodo } from "./Nodo";
import { NodoCompuesto } from "./NodoCompuesto";
import { Par, Predicado } from "./Predicado";

let nodo: Nodo<number> = new Nodo<number>(2)
let nodo2: Nodo<number> = new Nodo<number>(3)
let nodo3: Nodo<number> = new Nodo<number>(9)
let nodo5: Nodo<number> = new Nodo<number>(8)

let lista: Nodo<number>[] = [nodo,nodo2,nodo3]

let nodo4: Nodo<number> = new Nodo<number>(4,lista)

let lista2: Nodo<number>[] = [nodo5,nodo2]

let nodo_compuesto: NodoCompuesto<number> = new NodoCompuesto<number>(3,lista2,nodo4)

const f: Funcion<number> = new Sumar()
const p: Predicado<number> = new Par()

console.log(nodo_compuesto.cumplen(p))