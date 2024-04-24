//CLASES GENERICAS
var Either = /** @class */ (function () {
    function Either(value, left) {
        this.value = value;
        this.left = left;
    }
    Either.prototype.isLeft = function () {
        return this.left;
    };
    Either.prototype.getLeft = function () {
        if (!this.isLeft())
            throw new Error();
        return this.value;
    };
    Either.prototype.isRight = function () {
        return !this.left;
    };
    Either.prototype.getRight = function () {
        if (!this.isRight())
            throw new Error();
        return this.value;
    };
    Either.makeLeft = function (value) {
        return new Either(value, true);
    };
    Either.makeRight = function (value) {
        return new Either(value, false);
    };
    return Either;
}());
var e1 = Either.makeLeft(4);
console.log(e1.getLeft());
console.log(e1.isLeft());
console.log(e1.isRight());
