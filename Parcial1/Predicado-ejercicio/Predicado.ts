export interface Predicado<T>{
    cumple(t: T): boolean
}

export class Par implements Predicado<number>{
    cumple(t: number): boolean {
        if(t % 2 == 0) return true
        return false 
    }
}