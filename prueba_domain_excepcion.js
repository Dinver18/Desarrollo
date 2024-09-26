"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prueba = void 0;
var Result_1 = require("./Clases_Genericas/Result");
var user_1 = require("./domain copy/user");
var user_email_1 = require("./domain copy/value-objects/user-email");
var user_id_1 = require("./domain copy/value-objects/user-id");
var user_name_1 = require("./domain copy/value-objects/user-name");
var user_phone_1 = require("./domain copy/value-objects/user-phone");
var Prueba = /** @class */ (function () {
    function Prueba() {
    }
    Prueba.prototype.crearUser = function (id, name, phone, email) {
        try {
            var user_2 = user_1.User.create(user_id_1.UserId.create(id), user_name_1.UserName.create(name), user_phone_1.UserPhone.create(phone), user_email_1.UserEmail.create(email));
            return Result_1.Result.makeResult(user_2);
        }
        catch (error) {
            return Result_1.Result.makeError(error);
        }
    };
    return Prueba;
}());
exports.Prueba = Prueba;
var prueba1 = new Prueba();
var user = prueba1.crearUser("1", "Juan", "123456789", "bastidas");
console.log(user.isError());
