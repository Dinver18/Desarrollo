//CLASES GENERICAS
export abstract class DomainEvent{
  private ocurredOn: Date

  constructor(){
    this.ocurredOn = new Date()
  }

  get OcurredOn(): Date{
    return this.ocurredOn
  }

  get eventName(): string{
    return this.constructor.name
  }
}
export class Either<TLeft, TRight>{
    private readonly value: TLeft | TRight;
    private readonly left: boolean;
    private readonly code?: number
  
    private constructor(value: TLeft | TRight, left: boolean, code?: number) {
      this.value = value;
      this.left = left;
      this.code = code
    }
  
    isLeft(): boolean {
      return this.left;
    }
  
    getLeft(): TLeft {
      if (!this.isLeft()) throw new Error();
      return <TLeft>this.value;
    }
  
    isRight(): boolean {
      return !this.left;
    }
  
    getRight(): TRight {
      if (!this.isRight()) throw new Error();
      return <TRight>this.value;
    }
  
    static makeLeft<TLeft, TRight>(value: TLeft) {
      return new Either<TLeft, TRight>(value, true);
    }
  
    static makeRight<TLeft, TRight>(value?: TRight,code?: number) {
      return new Either<TLeft, TRight>(value as TRight,false,code);
    }

    
}

const e1 = Either.makeLeft<Error,void>(new Error("Error"))
const e2 = Either.makeRight<Error,void>();
//console.log(e1.isLeft())
//console.log(e1.isRight())
