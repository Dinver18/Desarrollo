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
    Entity.prototype.equals = function (entity) {
        return this.id === entity.id; //por ahora suponemos que el id solo puede tener tipos primitivos
    };
    return Entity;
}());
exports.Entity = Entity;
