export class Error{
    public msg: string
    
    constructor(msg: string){
        this.msg = msg
    }

    getMsg(): string{
        return this.msg
    }
}