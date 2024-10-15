import { Either } from "../../Clases_Genericas/Either"
import { BaseHanlder } from "../BaseHandler"
import { Estado } from "../Cliente"
import { Error } from "../Error"
import { Orden } from "../Orden"

export class StatusHandler extends BaseHanlder{
    
    handle(request: Either<Error[], Orden>): Either<Error[], Orden> {
        if(request.isRight()){
            const orden = request.getRight()

            if(orden.getStatus() !== Estado.Activo){
                const error = new Error("Status invalido")
                this.errores.push(error)
            }

            let result = super.handlerNext(request)

            return result

        }
        return request
    }
    

}