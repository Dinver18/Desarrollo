const fechaPersonalizada = new Date(2024, 0, 10); // El mes se indexa desde 0 (enero)

console.log("Fecha personalizada:", fechaPersonalizada);

interface saludo{
    saludar(): void;
}

interface despedida{
    despedirse(): void;
}

class people implements saludo,despedida{
    saludar(): void {}
    despedirse(): void {}
}

class humano{
    private p: despedida;
    constructor(p){
        this.p = p
    }
    hi(){
        return "hola"
    }
}

const persona = new people()
const human = new humano(persona);


class verificar{
    verdadero(r: boolean): boolean{
        if(r) return true
        return false
    }
}

class saludar{
    verificar(): boolean{
        let verificacion = new verificar();
        return true;
    }
}

let sal = new saludar();
sal.verificar()