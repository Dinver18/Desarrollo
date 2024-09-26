import { DomainException } from "../../Domain/domain-exception/domain-exception";

export class InvalidUserId extends DomainException {
    constructor(msg: string) {
        super(msg);
    }
}