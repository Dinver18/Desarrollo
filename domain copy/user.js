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
exports.User = void 0;
var aggregate_root_1 = require("../Domain/aggregate-root/aggregate-root");
var user_created_event_1 = require("./events/user-created-event");
var invalid_user_1 = require("./exceptions/invalid-user");
var user_name_modified_event_1 = require("./events/user-name-modified-event");
var user_phone_modified_event_1 = require("./events/user-phone-modified-event");
var user_email_modified_event_1 = require("./events/user-email-modified-event");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(id, name, phone, email) {
        var userCreated = user_created_event_1.UserCreated.create(id, name, phone, email);
        return _super.call(this, id, userCreated) || this;
    }
    User.prototype.applyEvent = function (event) {
        switch (event.eventName) {
            case 'UserCreated':
                var userCreated = event;
                this.name = userCreated.userName;
                this.phone = userCreated.userPhone;
                this.email = userCreated.userEmail;
            case 'UserNameModified':
                var userNameModified = event;
                this.name = userNameModified.userName;
            case 'UserPhoneModified':
                var userPhoneModified = event;
                this.phone = userPhoneModified.userPhone;
            case 'UserEmailModified':
                var userEmailModified = event;
                this.email = userEmailModified.email;
        }
    };
    User.prototype.ensureValidState = function () {
        if (!this.name || !this.phone || !this.email)
            throw new invalid_user_1.InvalidUser("El usuario tiene que ser valido");
    };
    Object.defineProperty(User.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Email", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Phone", {
        get: function () {
            return this.phone;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.updateName = function (name) {
        this.onEvent(user_name_modified_event_1.UserNameModified.create(this.Id, name));
    };
    User.prototype.updateEmail = function (email) {
        this.onEvent(user_email_modified_event_1.UserEmailModified.create(this.Id, email));
    };
    User.prototype.updatePhone = function (phone) {
        this.onEvent(user_phone_modified_event_1.UserPhoneModified.create(this.Id, phone));
    };
    User.create = function (id, name, phone, email) {
        return new User(id, name, phone, email);
    };
    return User;
}(aggregate_root_1.AggregateRoot));
exports.User = User;
