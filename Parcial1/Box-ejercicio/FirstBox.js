"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstBox = void 0;
var FirstBox = /** @class */ (function () {
    function FirstBox() {
    }
    FirstBox.prototype.add = function (b, cajas) {
        cajas.unshift(b);
        return cajas;
    };
    return FirstBox;
}());
exports.FirstBox = FirstBox;
