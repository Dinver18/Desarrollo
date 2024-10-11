import { Either } from "../../Clases_Genericas/Either"
import { BaseHanlder } from "../BaseHandler"
import { Estado } from "../Cliente"
import { Error } from "../Error"
import { Orden } from "../Orden"

export class AddressHandler extends BaseHanlder<Error, Orden>{
    
    handle(request: Either<Error, Orden>): Either<Error, Orden> {
        if(request.isRight()){
            let orden = request.getRight()
            if((orden.getAddres().getCodigo()) && (orden.getAddres().getDireccion()) && (orden.getAddres().getPais())){}
        }
        return request
    }

}