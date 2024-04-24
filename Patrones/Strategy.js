var ConcreteStrategyA = /** @class */ (function () {
    function ConcreteStrategyA() {
    }
    ConcreteStrategyA.prototype.execute = function (data) {
        return data.sort();
    };
    return ConcreteStrategyA;
}());
var ConcreteStrategyB = /** @class */ (function () {
    function ConcreteStrategyB() {
    }
    ConcreteStrategyB.prototype.execute = function (data) {
        return data.reverse();
    };
    return ConcreteStrategyB;
}());
var context = /** @class */ (function () {
    function context(strategy) {
        this.strategy = strategy;
    }
    context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    context.prototype.doSomething = function (data) {
        console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)');
        var result = this.strategy.execute(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    };
    return context;
}());
var contexto = new context(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
contexto.doSomething(['a', 'b', 'c', 'd', 'e']);
console.log('');
console.log('Client: Strategy is set to reverse sorting.');
contexto.setStrategy(new ConcreteStrategyB());
contexto.doSomething(['a', 'b', 'c', 'd', 'e']);
