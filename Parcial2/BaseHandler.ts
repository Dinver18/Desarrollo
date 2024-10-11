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
        for (let handler of this.handlers) {
            const resultado = handler.handle(request);
            if (resultado.isLeft()) {
                this.errores.push(resultado.getLeft());
            }
        }
        return request; 
    }
}
