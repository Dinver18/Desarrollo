"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
var Entity = /** @class */ (function () {
    function Entity(id) {
        this.id = id;
    }
    Object.defineProperty(Entity.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Entity.prototype.equals = function (id) {
        return this.id.equals(id);
    };
    return Entity;
}());
exports.Entity = Entity;
