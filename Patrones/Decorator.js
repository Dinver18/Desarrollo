var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ConcretComponent = /** @class */ (function () {
    function ConcretComponent() {
        this.valores = [1, 2, 3];
    }
    ConcretComponent.prototype.obtener = function () {
        return this.valores;
    };
    ConcretComponent.prototype.operacion = function () {
        return 'ComponenteConcreto';
    };
    return ConcretComponent;
}());
/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
var Decorator = /** @class */ (function () {
    function Decorator(component) {
        this.componet = component;
    }
    /**
     * The Decorator delegates all work to the wrapped component.
     */
    Decorator.prototype.operacion = function () {
        return this.componet.operacion();
    };
    Decorator.prototype.obtener = function () {
        return this.componet.obtener();
    };
    return Decorator;
}());
var ConcreteDecoratorA = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorA, _super);
    function ConcreteDecoratorA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Decorators may call parent implementation of the operation, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    ConcreteDecoratorA.prototype.operacion = function () {
        return "ConcreteDecoratorA(".concat(_super.prototype.operacion.call(this), ")");
    };
    return ConcreteDecoratorA;
}(Decorator));
/**
 * Decorators can execute their behavior either before or after the call to a
 * wrapped object.
 */
var ConcreteDecoratorB = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorB, _super);
    function ConcreteDecoratorB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Decorators may call parent implementation of the operation, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    ConcreteDecoratorB.prototype.operacion = function () {
        return "ConcreteDecoratorB(".concat(_super.prototype.operacion.call(this), ")");
    };
    return ConcreteDecoratorB;
}(Decorator));
/**
 * The client code works with all objects using the Component interface. This
 * way it can stay independent of the concrete classes of components it works
 * with.
 */
function clientCode(component) {
    console.log("RESULT: ".concat(component.operacion()));
}
var simple = new ConcretComponent();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');
/**
 * ...as well as decorated ones.
 *
 * Note how decorators can wrap not only simple components but the other
 * decorators as well.
 */
var decorator1 = new ConcreteDecoratorA(simple);
var decorator2 = new ConcreteDecoratorB(decorator1);
console.log(decorator1.obtener());
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);
