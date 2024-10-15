import { Either } from "../Clases_Genericas/Either";
import { Error } from "./Error";
import { Handler } from "./Handler";
import { Orden } from "./Orden";

export abstract class BaseHanlder implements Handler<Error[], Orden> {
    protected errores: Error[] = [];
    protected handlers: Handler<Error[], Orden>[] = [];  

    addHandler(h: Handler<Error[], Orden>): void {
        this.handlers.push(h);
    }

    abstract handle(request: Either<Error[], Orden>): Either<Error[], Orden>

    handlerNext(request: Either<Error[], Orden>): Either<Error[], Orden> {
        
        if (this.handlers.length > 0) {
            for(const h of this.handlers){
                const result = h.handle(request);
                if(result.isLeft()){
                    let errores = result.getLeft()
                    for(const e of errores){
                        this.errores.push(e)
                    }
                }
            }
        }

        if(this.errores.length > 0){
            return Either.makeLeft(this.errores)
        }

        return Either.makeRight(request.getRight()); 
    }
}
