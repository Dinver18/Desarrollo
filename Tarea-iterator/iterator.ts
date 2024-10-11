import { Optional } from "../Clases_Genericas/Optional";

export interface Iterator<T>{
    next(): Optional<T>; // Devuelve el objeto actual
    hasNext(): boolean; // Verifica si la posicion actual es valida.
}