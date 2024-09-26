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
exports.UserCreated = void 0;
/* eslint-disable prettier/prettier */
var domain_event_1 = require("../../Domain/domain-event/domain-event");
var UserCreated = /** @class */ (function (_super) {
    __extends(UserCreated, _super);
    function UserCreated(userId, userName, userPhone, userEmail) {
        var _this = _super.call(this) || this;
        _this.userId = userId;
        _this.userName = userName;
        _this.userPhone = userPhone;
        _this.userEmail = userEmail;
        return _this;
    }
    UserCreated.create = function (userId, userName, userPhone, userEmail) {
        return new UserCreated(userId, userName, userPhone, userEmail);
    };
    return UserCreated;
}(domain_event_1.DomainEvent));
exports.UserCreated = UserCreated;
