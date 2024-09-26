import { DomainException } from "../../Domain/domain-exception/domain-exception";

export class InvalidUserPhone extends DomainException {
    constructor(msg: string) {
        super(msg);
    }
}