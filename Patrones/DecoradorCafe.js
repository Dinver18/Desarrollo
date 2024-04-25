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
var CafeRegular = /** @class */ (function () {
    function CafeRegular() {
    }
    CafeRegular.prototype.getDescription = function () {
        return 'Cafe regular';
    };
    CafeRegular.prototype.getCount = function () {
        return 2.5;
    };
    return CafeRegular;
}());
var DecoradorBase = /** @class */ (function () {
    function DecoradorBase(coffe) {
        this.decoratedCoffe = coffe;
    }
    DecoradorBase.prototype.getDescription = function () {
        return this.decoratedCoffe.getDescription();
    };
    DecoradorBase.prototype.getCount = function () {
        return this.decoratedCoffe.getCount();
    };
    return DecoradorBase;
}());
var MilkDecorador = /** @class */ (function (_super) {
    __extends(MilkDecorador, _super);
    function MilkDecorador(coffe) {
        return _super.call(this, coffe) || this;
    }
    MilkDecorador.prototype.getDescription = function () {
        var desc = _super.prototype.getDescription.call(this) + ', con leche';
        return desc;
    };
    MilkDecorador.prototype.getCount = function () {
        var precio = _super.prototype.getCount.call(this) + 0.5;
        return precio;
    };
    return MilkDecorador;
}(DecoradorBase));
var coffe = new CafeRegular();
console.log("Description: ".concat(coffe.getDescription()));
console.log("Costo: ".concat(coffe.getCount()));
var decorador1 = new MilkDecorador(coffe);
console.log("Description: ".concat(decorador1.getDescription()));
console.log("Costo: ".concat(decorador1.getCount()));
