"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidUserException = exports.DomainException = exports.Optional = void 0;
var Optional = /** @class */ (function () {
    function Optional(value) {
        if (value) {
            this.value = value;
            this.assigned = true;
        }
        else {
            this.value = undefined;
            this.assigned = false;
        }
    }
    Optional.prototype.hasValue = function () {
        return this.assigned;
    };
    Optional.prototype.getValue = function () {
        if (!this.assigned)
            throw Error();
        return this.value;
    };
    return Optional;
}());
exports.Optional = Optional;
var DomainException = /** @class */ (function (_super) {
    __extends(DomainException, _super);
    function DomainException(message) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, DomainException.prototype);
        return _this;
    }
    return DomainException;
}(Error));
exports.DomainException = DomainException;
var InvalidUserException = /** @class */ (function (_super) {
    __extends(InvalidUserException, _super);
    function InvalidUserException(msg) {
        return _super.call(this, msg) || this;
    }
    return InvalidUserException;
}(DomainException));
exports.InvalidUserException = InvalidUserException;
var error = new InvalidUserException("error");
error.name;
var DenunciarServiceEntryDTO = /** @class */ (function () {
    function DenunciarServiceEntryDTO() {
    }
    return DenunciarServiceEntryDTO;
}());
var EmailEntryDTO = /** @class */ (function () {
    function EmailEntryDTO() {
    }
    return EmailEntryDTO;
}());
var DenunciaResponseDTO = /** @class */ (function () {
    function DenunciaResponseDTO() {
    }
    return DenunciaResponseDTO;
}());
var Producer = /** @class */ (function () {
    function Producer() {
        this._listiners = [];
    }
    return Producer;
}());
var Denunciar = /** @class */ (function (_super) {
    __extends(Denunciar, _super);
    function Denunciar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Denunciar.prototype.notify = function (message) {
        throw new Error("Method not implemented.");
    };
    Denunciar.prototype.execute = function (data) {
        throw new Error("Method not implemented.");
    };
    return Denunciar;
}(Producer));
var enviar = /** @class */ (function () {
    function enviar() {
    }
    enviar.prototype.update = function (message) {
        throw new Error("Method not implemented.");
    };
    return enviar;
}());
var list = [];
list.push(new enviar);
