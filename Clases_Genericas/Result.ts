export class Result<T> {
    private value: T;
    private _error: Error;
    private _isError: boolean;

    private constructor(isError: boolean, 
      value?: T, _error?: Error) {
      this.value = value!;
      this._error = _error!;
      this._isError = isError;
    }
  
    public isError(): boolean {
      return this._isError;
    }
  
    getValue(): T {
      if (this.isError()) throw new Error();
      return this.value;
    }
  
    getError(): Error {
      if (!this.isError()) throw new Error();
      return this._error;
    }
    
    static makeResult<T>(value: T) {
      return new Result<T>(false, value);
    }
  
    static makeError<T>(error: Error) {
      return new Result<T>(true, undefined, error);
    }
}
  
class response{}  
  
let r : Result<number> = Result.makeResult(10);
console.log(r.getValue());

let r2 : Result<number> = Result.makeError(new Error());
console.log(r.isError());
