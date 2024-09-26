"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxContainer = void 0;
var BoxContainer = /** @class */ (function () {
    function BoxContainer(arrenger, cajas) {
        this.cajas = [];
        this.arrenger = arrenger;
        if (cajas) {
            this.cajas = cajas;
        }
    }
    BoxContainer.prototype.arrangeBox = function (b) {
        this.cajas = this.arrenger.add(b, this.cajas);
    };
    BoxContainer.prototype.setArrenger = function (arrenger) {
        this.arrenger = arrenger;
    };
    BoxContainer.prototype.getCajas = function () {
        return this.cajas;
    };
    return BoxContainer;
}());
exports.BoxContainer = BoxContainer;
