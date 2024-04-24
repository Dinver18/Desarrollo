interface componente{
    calcular(): number;
}

interface Strategy{
    descuento(precio: number): number;
}

class DescuentoConcreto implements Strategy{
    descuento(precio: number): number {
        return precio - (precio * 0.10);
    }
}

class elemento{
    public codigo: number;
    public precio: number;

    constructor(codigo:number,precio:number){
        this.codigo = codigo;
        this.precio = precio;
    }

    calcular(){
        return this.precio;
    }
}

class kit implements componente {
    private codigo: number;
    private precio: number;
    private estrategiaDecuento: Strategy;

    private elementos: componente[];

    constructor(codigo: number,estrategiaDecuento: Strategy){
        this.elementos = []
        this.codigo = codigo;
        this.estrategiaDecuento = estrategiaDecuento;
    }

    calcular(): number {
        let precioTotal = 0;
        for (const elemento of this.elementos) {
            precioTotal +=  elemento.calcular();
        }
        this.precio = this.estrategiaDecuento.descuento(precioTotal)
        return this.precio;
    }

    agregar(c: componente): void{
        this.elementos.push(c);
    }

    remover(c: componente): void{
        let indice = 0
        this.elementos.forEach(
            elemento => {
                if(elemento === c){
                    indice = this.elementos.indexOf(elemento);
                }
        });
        if(indice){
            this.elementos.splice(indice,1)
        }else{
            return  console.log("Elemento no encontrado");
        }
    }

    getComponentes(): componente[]{
        return this.elementos;
    }
}

let elemento1 = new elemento(1,5);
let elemento2 = new elemento(2,10);
let elemento3 = new elemento(3, 5);

let descuento = new DescuentoConcreto();

let kit1 = new kit(1,descuento);
let kit2 = new kit(2,descuento);
kit1.agregar(elemento1);
kit1.agregar(elemento2);
kit2.agregar(elemento3);
kit1.agregar(kit2);


console.log(kit1.calcular());

