"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
var Box = /** @class */ (function () {
    function Box(valor) {
        this.value = valor;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
exports.Box = Box;
exports.default = Box;
