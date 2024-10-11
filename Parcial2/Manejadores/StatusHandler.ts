import { Either } from "../../Clases_Genericas/Either"
import { BaseHanlder } from "../BaseHandler"
import { Estado } from "../Cliente"
import { Error } from "../Error"
import { Orden } from "../Orden"

export class StatusHandler extends BaseHanlder{
    
    handle(request: Either<Error[], Orden>): Either<Error[], Orden> {
        if(request.isRight()){
            let orden = request.getRight()
        }
        return request
    }
    

}