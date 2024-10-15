import { Either } from "../../Clases_Genericas/Either";
import { BaseHanlder } from "../BaseHandler";
import { Error } from "../Error";
import { Orden } from "../Orden";

export class CreditHandler extends BaseHanlder {
        
    constructor(){
        super();
    }
    
    handle(request: Either<Error[], Orden>): Either<Error[], Orden> {
        if (request.isRight()) {
            const orden = request.getRight()
            const cliente = orden.getClient()

            let limite = orden.getMonto() + cliente.getSaldo()

            if (limite > cliente.getCredito()) {
                const error = new Error("Limite de credito superado")
                this.errores.push(error)
            }

            let result = super.handlerNext(request)

            return result

        }
        return request
    }


}