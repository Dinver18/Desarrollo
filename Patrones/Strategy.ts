interface Strategy{
    execute(data: string[]): string[]
}

class ConcreteStrategyA implements Strategy{
    execute(data: string[]): string[] {
        return data.sort();
    }
}

class ConcreteStrategyB implements Strategy{
    execute(data: string[]): string[] {
        return data.reverse();
    }
}

class context{
    private strategy: Strategy;

    constructor(strategy: Strategy){
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy){
        this.strategy = strategy
    }

    doSomething(data: string[]): void{
        console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)');
        const result = this.strategy.execute(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    }
}

const contexto = new context(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
contexto.doSomething(['a', 'b', 'c', 'd', 'e'])

console.log('');

console.log('Client: Strategy is set to reverse sorting.');
contexto.setStrategy(new ConcreteStrategyB());
contexto.doSomething(['a', 'b', 'c', 'd', 'e'])
