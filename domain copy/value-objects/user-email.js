"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEmail = void 0;
var invalid_user_email_1 = require("../exceptions/invalid-user-email");
var UserEmail = /** @class */ (function () {
    function UserEmail(email) {
        var valido = true;
        var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(email)) {
            valido = false;
        }
        if (!valido) {
            throw new invalid_user_email_1.InvalidUserEmailException("El email ".concat(email, " no es valido."));
        }
        this.email = email;
    }
    Object.defineProperty(UserEmail.prototype, "Email", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    UserEmail.prototype.equals = function (valueObject) {
        return this.email === valueObject.email;
    };
    UserEmail.create = function (email) {
        return new UserEmail(email);
    };
    return UserEmail;
}());
exports.UserEmail = UserEmail;
