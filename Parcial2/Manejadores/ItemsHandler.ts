import { Either } from "../../Clases_Genericas/Either";
import { BaseHanlder } from "../BaseHandler";
import { Error } from "../Error";
import { Orden } from "../Orden";

export class ItemsHandler extends BaseHanlder{
    
    constructor(){
        super();
    }
    
    handle(request: Either<Error[], Orden>): Either<Error[], Orden> {
        if(request.isRight()){

            const orden = request.getRight();
            const items = orden.getItems()

            for(const i of items){

                if(i.getCantidad() <= 0){
                    const error = new Error("Cantidad del producto "+i+" no puede ser 0")
                    this.errores.push(error)
                }

            }

            const result = super.handlerNext(Either.makeRight(orden))

        }
        
        return request
    }
    
}