"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Either = exports.DomainEvent = void 0;
//CLASES GENERICAS
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
            return this.constructor.name;
        },
        enumerable: false,
        configurable: true
    });
    return DomainEvent;
}());
exports.DomainEvent = DomainEvent;
var Either = /** @class */ (function () {
    function Either(value, left) {
        this.value = value;
        this.left = left;
    }
    Either.prototype.isLeft = function () {
        return this.left;
    };
    Either.prototype.getLeft = function () {
        if (!this.isLeft())
            throw new Error();
        return this.value;
    };
    Either.prototype.isRight = function () {
        return !this.left;
    };
    Either.prototype.getRight = function () {
        if (!this.isRight())
            throw new Error();
        return this.value;
    };
    Either.makeLeft = function (value) {
        return new Either(value, true);
    };
    Either.makeRight = function (value) {
        return new Either(undefined, false);
    };
    return Either;
}());
exports.Either = Either;
var e1 = Either.makeLeft(new Error("Error"));
var e2 = Either.makeRight();
//console.log(e1.isLeft())
//console.log(e1.isRight())
