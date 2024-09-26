export class Cliente{
    private nombre: string
    private fecha_nacimiento: Date
    private _isSpecial: boolean

    constructor(nombre: string, fecha_nacimiento: Date, _isSpecial: boolean){
        this.nombre = nombre
        this.fecha_nacimiento = fecha_nacimiento
        this._isSpecial = _isSpecial
    }

    get Edad(){
        let today = new Date();
        let edad = today.getFullYear() - this.fecha_nacimiento.getFullYear();
        return edad
    }

    get IsSpecial(){
        return this._isSpecial
    }

    private set _IsSpecial(b: boolean){
        this._isSpecial = b
    }

}