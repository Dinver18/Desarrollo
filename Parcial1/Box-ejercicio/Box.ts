export class Box<T>{
    private value:T;
    constructor(valor:T){
        this.value = valor;
    }

    public getValue(){
        return this.value
    }
}

export default Box