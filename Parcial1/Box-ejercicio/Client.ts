import Box from "./Box";
import { BoxContainer } from "./BoxContainer";
import { FirstBox } from "./FirstBox";
import { LastBox } from "./LastBox";

const b1 = new Box<number>(1)
const b2 = new Box<number>(2)

console.log("hola")

let list: Box<number>[] = []

const first = new FirstBox<number>()
const last = new LastBox<number>()

const container1 = new BoxContainer<number>(last)

console.log(container1.getCajas())

container1.arrangeBox(b1)
container1.arrangeBox(b2)

console.log(container1.getCajas())