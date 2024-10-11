import { Optional } from "../Clases_Genericas/Optional";
import { aggregator } from "./aggregator";
import { Iterator } from "./iterator";
import { ListIterator } from "./ListIterator";
import { ListNode } from "./ListNode";

export class ListAggregate<T> implements aggregator<T>{
    constructor(
        private rootList: ListNode<T> 
    ){}
    getIterator(): Iterator<T> {
        return new ListIterator(this.rootList)
    }
}