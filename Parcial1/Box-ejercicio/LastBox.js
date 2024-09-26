"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastBox = void 0;
var LastBox = /** @class */ (function () {
    function LastBox() {
    }
    LastBox.prototype.add = function (b, cajas) {
        cajas.push(b);
        return cajas;
    };
    return LastBox;
}());
exports.LastBox = LastBox;
