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
exports.UserEmailModified = void 0;
var domain_event_1 = require("../../Domain/domain-event/domain-event");
var UserEmailModified = /** @class */ (function (_super) {
    __extends(UserEmailModified, _super);
    function UserEmailModified(id, email) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.email = email;
        return _this;
    }
    UserEmailModified.create = function (id, email) {
        return new UserEmailModified(id, email);
    };
    return UserEmailModified;
}(domain_event_1.DomainEvent));
exports.UserEmailModified = UserEmailModified;
