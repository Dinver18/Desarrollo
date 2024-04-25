interface Coffe{
    getDescription(): string;
    getCount(): number;
}

class CafeRegular implements Coffe{
    getDescription(): string {
        return 'Cafe regular'
    }
    getCount(): number {
        return 2.5;
    }
}

abstract class DecoradorBase implements Coffe{
    
    protected decoratedCoffe: Coffe;

    constructor(coffe: Coffe){
        this.decoratedCoffe = coffe
    }

    getDescription(): string {
        return this.decoratedCoffe.getDescription();
    }

    getCount(): number {
        return this.decoratedCoffe.getCount();
    }
    
}

class MilkDecorador extends DecoradorBase{
    constructor(coffe: Coffe){
        super(coffe);
    }

    getDescription(): string {
        let desc = super.getDescription() + ', con leche';
        return desc;
    }

    getCount(): number {
        let precio = super.getCount() + 0.5;
        return precio;
    }
}

const coffe = new CafeRegular();

console.log(`Description: ${coffe.getDescription()}`);
console.log(`Costo: ${coffe.getCount()}`);

const decorador1 = new  MilkDecorador(coffe);

console.log(`Description: ${decorador1.getDescription()}`);
console.log(`Costo: ${decorador1.getCount()}`);

