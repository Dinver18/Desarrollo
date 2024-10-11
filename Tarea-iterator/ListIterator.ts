import { Optional } from "../Clases_Genericas/Optional";
import { Iterator } from "./iterator";
import { ListNode } from "./ListNode";

export class ListIterator<T> implements Iterator<T> {
    
    constructor(
        private root: ListNode<T> | null
    ){}

    next(): Optional<T> {
        if(this.hasNext()){
            const data = this.root!.data
            this.root = this.root!.next
            return new Optional<T>(data)
        }
        return new Optional<T>(undefined)
    }
    hasNext(): boolean {
        return this.root != null
    }

}
