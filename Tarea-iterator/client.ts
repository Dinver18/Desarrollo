import { Optional } from "../Clases_Genericas/Optional";
import { ListAggregate } from "./ListAggregate";
import { ListNode } from "./ListNode";

const list = new ListNode(new ListNode(new ListNode(null,10),5),15)
const aggregate = new ListAggregate(list)
const iterator = aggregate.getIterator()
console.log(iterator.next().getValue())
console.log(iterator.next().getValue())
console.log(iterator.next().getValue())
console.log(iterator.next().hasValue())
if(!iterator.hasNext()){
    console.log("Llego el fin")
}