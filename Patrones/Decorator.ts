interface Component{
    operacion(): string
}

class ConcretComponent implements Component{
    private valores: number[] = [1,2,3];

    obtener(){
        return this.valores;
    }

    operacion(): string {
        return 'ComponenteConcreto'
    }
}

/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
class Decorator implements Component{
    protected componet: Component;

    constructor(component: Component){
        this.componet = component;
    }

    /**
     * The Decorator delegates all work to the wrapped component.
     */
    operacion(): string {
        return  this.componet.operacion();
    }
}

class ConcreteDecoratorA extends Decorator{
    /**
     * Decorators may call parent implementation of the operation, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    operacion(): string {
        return `ConcreteDecoratorA(${super.operacion()})`;
    }
}

/**
 * Decorators can execute their behavior either before or after the call to a
 * wrapped object.
 */
class ConcreteDecoratorB extends Decorator {
    /**
     * Decorators may call parent implementation of the operation, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    public operacion(): string {
        return `ConcreteDecoratorB(${super.operacion()})`;
    }
}

/**
 * The client code works with all objects using the Component interface. This
 * way it can stay independent of the concrete classes of components it works
 * with.
 */
function clientCode(component: Component){
    console.log(`RESULT: ${component.operacion()}`);
}

const simple = new ConcretComponent();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

/**
 * ...as well as decorated ones.
 *
 * Note how decorators can wrap not only simple components but the other
 * decorators as well.
 */
const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log(decorator1)
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);