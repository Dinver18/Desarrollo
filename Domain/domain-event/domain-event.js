"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEvent = void 0;
var DomainEvent = /** @class */ (function () {
    function DomainEvent() {
        this.ocurredOn = new Date();
    }
    Object.defineProperty(DomainEvent.prototype, "OcurredOn", {
        get: function () {
            return this.ocurredOn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DomainEvent.prototype, "eventName", {
        get: function () {
            return Object.getPrototypeOf(this).constructor.name;
        },
        enumerable: false,
        configurable: true
    });
    return DomainEvent;
}());
exports.DomainEvent = DomainEvent;
