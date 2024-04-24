class Optional<T> {
    private value: T | undefined | null;
    private assigned: boolean;
  
    constructor(value?: T) {
      if (value) {
        this.value = value;
        this.assigned = true;
      } else if (value === undefined){
        this.value = undefined;
        this.assigned = false;
      } else if(value === null) {
        this.value = null;
        this.assigned = false;
      } else{
        this.value = undefined;
        this.assigned = false;
      }
    }
  
    hasValue(): boolean {
      return this.assigned;
    }
  
    getValue(): T {
      if (!this.assigned) throw Error();
      return <T>this.value;
    }
}

class Celda<T>{
    public valor: T;

    constructor(valor: T){this.valor = valor}

    reducir(f: (e1:T,e2:T) => T,predicado: (e:T) => boolean): Optional<T>{
        let p = predicado(this.valor)
        if(p){
            const optional = new Optional<T>(this.valor)
            return optional
        }
        return new Optional<T>(undefined);
    }
}

class Caja<T> extends Celda<T>{

    public elementos: Celda<T>[];
    public valor: T;
    
    constructor(valor: T){
        super(valor);
        this.elementos = [];
    }


    reducir(f: (e1: T, e2: T) => T, predicado: (e: T) => boolean): Optional<T> {
        
        if(this.elementos.length >= 2){

            let r: T = this.elementos[0].valor;

            for(let i = 1; i < this.elementos.length; i++){
                let r1: T = this.elementos[i].valor
                if(predicado(r1)){
                    r = f(r,r1);
                }
            }

            if(predicado(this.valor)) r = f(r,this.valor);
            return new Optional<T>(r);
        }
        return new Optional<T>();
    }

    agregar(c:Celda<T>){
        this.elementos.push(c)
    }

}

let c1 = new Celda<number>(2);
let c2 = new Celda<number>(6);
let c3 = new Celda<number>(5);
let c4 = new Celda<number>(2);

const f = (n1: number, n2: number): number => {
    return n1 + n2
}
const predicado = (n1: number): boolean => {
    return n1 % 2 === 0
}

let caja = new Caja<number>(4);

caja.agregar(c1);
caja.agregar(c2);
caja.agregar(c3);
caja.agregar(c4);

let optional = caja.reducir(f,predicado);
if(optional.hasValue()){
    console.log(optional.getValue());
}