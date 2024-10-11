import { Iterator } from "./iterator";

export interface aggregator<T>{
    getIterator(): Iterator<T>
}