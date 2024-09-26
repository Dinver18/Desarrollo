"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserId = void 0;
var UserId = /** @class */ (function () {
    function UserId(id) {
        var _existente = true;
        if (!id)
            _existente = false;
        if (!_existente)
            throw new Error('El id de usuario no puede ser vacío');
        var regex = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$');
        if (!regex.test(id))
            throw new Error();
        this.id = id;
    }
    Object.defineProperty(UserId.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    UserId.prototype.equals = function (valueObject) {
        return this.id === valueObject.Id;
    };
    UserId.create = function (id) {
        return new UserId(id);
    };
    return UserId;
}());
exports.UserId = UserId;
