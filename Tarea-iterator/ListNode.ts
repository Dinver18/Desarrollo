import { Optional } from "../Clases_Genericas/Optional";

export class ListNode<T>{
    constructor(
        public next: ListNode<T> | null,
        public data: T
    ){

    }
}