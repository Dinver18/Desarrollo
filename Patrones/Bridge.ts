class Abstraction{
    protected implementation: Implementation;

    constructor(implementation: Implementation){
        this.implementation = implementation;
    }

    public operation(): string{
        const result = this.implementation.operationImplementaion();
        return `Abstraction: Base operation with:\n${result}`;
    }
}

class ExtendedAbstraction extends Abstraction{
    public operation(): string {
        const result = this.implementation.operationImplementaion();
        return `ExtendedAbstraction: Extended operation with:\n${result}`;
    }
}

interface Implementation {
    operationImplementaion(): string;
}

class ConcreteImplementationA implements Implementation{
    public operationImplementaion(): string {
        return 'ConcreteImplementationA: Here\'s the result on the platform A.';
    }
}

class ConcreteImplementationB implements Implementation {
    operationImplementaion(): string {
        return 'ConcreteImplementationB: Here\'s the result on the platform B.';
    }
}

function clientCode(abstraction: Abstraction){
    console.log(abstraction.operation());
}

let  impl = new ConcreteImplementationA();
let abstraction = new Abstraction(impl);
clientCode(abstraction);
console.log("------------------------------");
impl = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(impl);
clientCode(abstraction);