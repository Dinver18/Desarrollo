interface Predicado<T>{
    cumple(t: T): boolean;
}

interface Funcion<T>{
    aplicar(t: T): void
}

class Par implements Predicado<number>{
    cumple(t: number): boolean {
        if (t%2) return false;  // Si el número es par, devuel
        return true;
    }
    
}

class Funcion<T> implements Funcion<T>{
    aplicar(t: T): void {
        
    }
}

class Nodo<T>{

    public valor: T
    public hijos: Nodo<T>[]

    constructor(valor: T,hijos?: Nodo<T>[]){
        this.valor = valor;
        this.hijos = hijos ? hijos : [];
    }

    agregar(n: Nodo<T>): void{
        this.hijos.push(n)
    }

    cumplen(p: Predicado<T>): number{
        let cont = 0;
        if(this.hijos.length > 0){
            for(let nodo of this.hijos){
                cont += nodo.cumplen(p);
            }
        }
        if (p.cumple(this.valor)) cont++;
        return cont;
    }
}

class NodoCompuesto<T> extends Nodo<T> {
    public nodo_interno?: Nodo<T>;

    constructor(valor: T,nodo_interno?: Nodo<T>,hijos?: Nodo<T>[]) {
        super(valor,hijos);
        this.nodo_interno = nodo_interno;

        // Verificar si hay un nodo interno y asignar sus hijos si está presente
        if (this.nodo_interno) {
            this.hijos = this.nodo_interno.hijos;
        }
    }

    cumplen(p: Predicado<T>): number{
        let cont = 0 
        cont = super.cumplen(p);
        console.log("cont para los hijos: ",cont)
        if(this.nodo_interno){
            cont += this.nodo_interno.cumplen(p)
            console.log("cont para interno: ",cont)
        }
        if (p.cumple(this.valor)) cont++;
        return cont;
    }
}

let n1 = new Nodo<number>(5);
let n2 = new Nodo<number>(2);
let n3 = new Nodo<number>(4);
let n4 = new Nodo<number>(2);

n1.agregar(n2);

let nc = new NodoCompuesto<number>(5,n1,[n3,n4]);

console.log(nc)
console.log(nc.cumplen(new Par()))
