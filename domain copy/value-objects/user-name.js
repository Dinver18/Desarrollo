"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserName = void 0;
var invalid_user_name_1 = require("../exceptions/invalid-user-name");
var UserName = /** @class */ (function () {
    function UserName(name) {
        var _existente = true;
        if (!name)
            _existente = false;
        if (!_existente)
            throw new invalid_user_name_1.InvalidUserName('El nombre no puede estar vacío');
        var regex = /^[a-zA-Z]+\s.+/;
        if (!regex.test(name))
            throw new invalid_user_name_1.InvalidUserName("El nombre ".concat(name, " no es valido"));
        if (name.length < 5 || name.length > 50) {
            throw new invalid_user_name_1.InvalidUserName("El nombre ".concat(name, " no es valido por la cantidad de caracteres"));
        }
        this.name = name;
    }
    Object.defineProperty(UserName.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    UserName.prototype.equals = function (valueObject) {
        return this.name === valueObject.Name;
    };
    UserName.create = function (name) {
        return new UserName(name);
    };
    return UserName;
}());
exports.UserName = UserName;
