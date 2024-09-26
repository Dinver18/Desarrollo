import { Either } from "./Either";

export class Optional<T> {
    private value: T | undefined;
    private assigned: boolean;
  
    constructor(value?: T) {
      if (value) {
        this.value = value;
        this.assigned = true;
      } else {
        this.value = undefined;
        this.assigned = false;
      }
    }
  
    hasValue(): boolean {
      return this.assigned;
    }
  
    getValue(): T {
      if (!this.assigned) throw Error();
      return <T>this.value;
    }
}

export abstract class DomainException extends Error {
  constructor ( message: string ) {
      super( message )
      Object.setPrototypeOf(this, DomainException.prototype)
  }
}

export class InvalidUserException extends DomainException{
  private readonly msg: string
  constructor(msg: string){
    super(msg)
  }
}

let error = new InvalidUserException("error");
error.name

interface ServiceDTO{
  id: string
}

class DenunciarServiceEntryDTO implements ServiceDTO{
  id: string;
}

class EmailEntryDTO implements ServiceDTO{
  id: string;
  email: string
}


class DenunciaResponseDTO{
  id: string
}

interface IService<D,L,R>{
  execute(data: D): Either<L,R>
}

interface Listener<T>{
  update(message: T): void
}

abstract class Producer<T>{
  private readonly _listiners: Listener<T>[] = []
  abstract notify(message: T): void
}

class Denunciar extends Producer<EmailEntryDTO> implements IService<DenunciarServiceEntryDTO,DomainException,DenunciaResponseDTO>{
  notify(message: EmailEntryDTO): void {
    throw new Error("Method not implemented.");
  }
  execute(data: DenunciarServiceEntryDTO): Either<DomainException, DenunciaResponseDTO> {
    throw new Error("Method not implemented.");
  }

}

class enviar implements Listener<EmailEntryDTO>{
  update(message: EmailEntryDTO): void {
    throw new Error("Method not implemented.");
  }
  
}

let list: Listener<ServiceDTO>[] = []
list.push(new enviar)