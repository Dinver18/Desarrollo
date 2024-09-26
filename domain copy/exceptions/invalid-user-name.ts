import { DomainException } from "../../Domain/domain-exception/domain-exception";

export class InvalidUserName extends DomainException {
    constructor(msg: string) {
        super(msg);
    }
}