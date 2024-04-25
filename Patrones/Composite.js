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
// Clase abstracta que representa un componente
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
// Clase que representa un archivo simple
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leaf.prototype.operation = function () {
        return 'Leaf';
    };
    return Leaf;
}(Component));
// Clase que representa un directorio
var Composite = /** @class */ (function (_super) {
    __extends(Composite, _super);
    function Composite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        return _this;
    }
    Composite.prototype.add = function (component) {
        this.children.push(component);
    };
    Composite.prototype.remove = function (component) {
        var index = this.children.indexOf(component);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    };
    Composite.prototype.operation = function () {
        var childResults = this.children.map(function (child) {
            return child.operation();
        }).join(', ');
        return "Composite [".concat(childResults, "]");
    };
    return Composite;
}(Component));
// Uso del patrón Composite
var root = new Composite();
var file1 = new Leaf();
var file2 = new Leaf();
var folder = new Composite();
folder.add(file1);
folder.add(file2);
root.add(folder);
console.log(root.operation());
