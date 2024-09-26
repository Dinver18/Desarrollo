"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
var Result = /** @class */ (function () {
    function Result(isError, value, _error) {
        this.value = value;
        this._error = _error;
        this._isError = isError;
    }
    Result.prototype.isError = function () {
        return this._isError;
    };
    Result.prototype.getValue = function () {
        if (this.isError())
            throw new Error();
        return this.value;
    };
    Result.prototype.getError = function () {
        if (!this.isError())
            throw new Error();
        return this._error;
    };
    Result.makeResult = function (value) {
        return new Result(false, value);
    };
    Result.makeError = function (error) {
        return new Result(true, undefined, error);
    };
    return Result;
}());
exports.Result = Result;
var response = /** @class */ (function () {
    function response() {
    }
    return response;
}());
var r = Result.makeResult(10);
console.log(r.getValue());
var r2 = Result.makeError(new Error());
console.log(r.isError());
