"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPhone = void 0;
var invalid_user_phone_1 = require("../exceptions/invalid-user-phone");
var UserPhone = /** @class */ (function () {
    function UserPhone(phone) {
        var _existente = true;
        if (!phone)
            _existente = false;
        if (!_existente)
            throw new invalid_user_phone_1.InvalidUserPhone('El telefono no puede estar vacío');
        if (phone.length < 11 || phone.length > 11) {
            throw new invalid_user_phone_1.InvalidUserPhone("El telefono ".concat(phone, " debe tener 11 digitos"));
        }
        this.phone = phone;
    }
    Object.defineProperty(UserPhone.prototype, "Phone", {
        get: function () {
            return this.Phone;
        },
        enumerable: false,
        configurable: true
    });
    UserPhone.prototype.equals = function (valueObject) {
        return this.phone == valueObject.Phone;
    };
    UserPhone.create = function (phone) {
        return new UserPhone(phone);
    };
    return UserPhone;
}());
exports.UserPhone = UserPhone;
