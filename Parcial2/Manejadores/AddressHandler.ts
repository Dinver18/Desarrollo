import { Either } from "../../Clases_Genericas/Either"
import { BaseHanlder } from "../BaseHandler"
import { Estado } from "../Cliente"
import { Error } from "../Error"
import { Orden } from "../Orden"

export class AddressHandler extends BaseHanlder{
        
    constructor(){
        super();
    }
    
    handle(request: Either<Error[], Orden>): Either<Error[], Orden> {
        if(request.isRight()){
            
            const orden = request.getRight()
            console.log(request)
            const direccion = orden.getAddres
            console.log(direccion)
            
            if(!orden.getAddres){
                const error = new Error("Direccion obligatoria")
                this.errores.push(error)
            }
            
            let result = super.handlerNext(request)

            return result
        }

        return request

    }

}