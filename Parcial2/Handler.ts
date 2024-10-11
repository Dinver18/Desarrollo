import { Either } from "../Clases_Genericas/Either";

export interface Handler<R, L> {
    addHandler(h: Handler<R, L>): void;
    handle(orden: Either<R, L>): Either<R, L>;
}