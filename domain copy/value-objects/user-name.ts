import { IValueObject } from '../../Domain/value-object/value-object.interface';
import { InvalidUserName } from '../exceptions/invalid-user-name';

export class UserName implements IValueObject<UserName> {
    private readonly name: string;

    protected constructor(name: string) {
        let _existente: boolean = true;

        if (!name) _existente = false;

        if (!_existente)
            throw new InvalidUserName('El nombre no puede estar vacío');

        const regex = /^[a-zA-Z]+\s.+/;

        if (!regex.test(name))
            throw new InvalidUserName(`El nombre ${name} no es valido`);

        if (name.length < 5 || name.length > 50) {
            throw new InvalidUserName(
                `El nombre ${name} no es valido por la cantidad de caracteres`,
            );
        }

        this.name = name;
    }

    get Name(): string {
        return this.name;
    }

    equals(valueObject: UserName): boolean {
        return this.name === valueObject.Name;
    }

    static create(name: string) {
        return new UserName(name);
    }
}