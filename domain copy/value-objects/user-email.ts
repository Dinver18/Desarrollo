import { IValueObject } from '../../Domain/value-object/value-object.interface';
import { InvalidUserEmailException } from '../exceptions/invalid-user-email';

export class UserEmail implements IValueObject<UserEmail> {
    private readonly email: string;

    private constructor(email: string) {
        let valido: boolean = true;

        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!regex.test(email)) {
            valido = false;
        }

        if (!valido) {
            throw new InvalidUserEmailException(`El email ${email} no es valido.`);
        }

        this.email = email;
    }

    get Email() {
        return this.email;
    }

    equals(valueObject: UserEmail): boolean {
        return this.email === valueObject.email;
    }

    static create(email: string): UserEmail {
        return new UserEmail(email);
    }
}