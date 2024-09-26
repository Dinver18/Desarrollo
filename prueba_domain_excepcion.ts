import { Result } from "./Clases_Genericas/Result";
import { User } from "./domain copy/user";
import { UserEmail } from "./domain copy/value-objects/user-email";
import { UserId } from "./domain copy/value-objects/user-id";
import { UserName } from "./domain copy/value-objects/user-name";
import { UserPhone } from "./domain copy/value-objects/user-phone";

export class Prueba{

    constructor(){}

    crearUser(
        id: string,
        name: string,
        phone: string,
        email: string,
    ) : Result<User>{
        try{
            const user = User.create(
                UserId.create(id),
                UserName.create(name),
                UserPhone.create(phone),
                UserEmail.create(email)
            )
            return Result.makeResult(user)
        }catch(error: any){
            return Result.makeError(error)
        }
    }

}

let prueba1 = new Prueba()
let user = prueba1.crearUser("1", "Juan", "123456789", "bastidas")
console.log(user.getError)