import { DomainException } from "../../Domain/domain-exception/domain-exception";

export class InvalidUserEmailException extends DomainException {
    constructor(msg: string) {
        super(msg);
    }
}