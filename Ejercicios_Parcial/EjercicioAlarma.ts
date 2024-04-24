/*abstract class Senser{
    public valorUmbral: number;
    public medida: number;
    protected estado: boolean;

    comprobarUmbral(): boolean {
        if (this.estado) {
            if(this.medida > this.valorUmbral){
                return true
            }
        }
        return false;
    }

    establecerEstado(estado: boolean){
        this.estado = estado;
    }

    abstract obtenerMedida(): number;
}

class SensorTemperatura extends Senser{

    constructor(medida: number,valorUmbral: number){
        super()
        this.estado = false;
        this.medida = medida;
        this.valorUmbral = valorUmbral;
    }

    obtenerMedida(): number {
        return this.medida;
    }

}

class SensorCompuesto extends Senser{
    private sensores: Array<Senser>;

    constructor(valorUmbral: number,sensores: Senser[]){
        super()
        this.estado = false;
        this.sensores = sensores;
        this.valorUmbral = valorUmbral;
    }

    obtenerMedida(): number {
        let promedio = 0;
        this.sensores.forEach((sensor) => {
            promedio += sensor.obtenerMedida();
        })
        this.medida = promedio /= this.sensores.length
        return this.medida;
    }

    modificarEstado(){
        if(this.valorUmbral < this.obtenerMedida()){
            this.estado = false;
        }
    }

    agregar(s: Senser){
        this.sensores.push(s);
    }

    eliminar(s: Senser){
        let indice = this.sensores.indexOf(s);
        this.sensores.splice(indice);
    }

    obtenerSensores(): Senser[]{
        return this.sensores
    }

}

class SistemaAlarma{
    private sensores: Senser[];
    private alarma: boolean;

    constructor(sensores: Senser[]){
        this.sensores = sensores;
        this.alarma = false;
    }

    activarAlarma(){
        if(!this.alarma){
            this.alarma = true;
            console.log('Alarma encendida')
        }
    }

    comprobarSensores(){
        
        for (const sensor of this.sensores) {
            
            let comprobacion = sensor.comprobarUmbral();

            if (comprobacion){
                console.log('Alarma activada')
                this.activarAlarma();
                break;
            }else{
                console.log("Alarma descativada");
            }

        }

    }

    obtenerSensores(): Senser[]{
        return this.sensores
    }

    agregar(s: Senser){
        this.sensores.push(s);
    }
}

let s1 = new SensorTemperatura(25,50);
let s2 = new SensorTemperatura(21,20);
let s3 = new SensorTemperatura(48,60);

let sistema = new SistemaAlarma([s1, s2]);

s1.establecerEstado(true);
s2.establecerEstado(true);
s3.establecerEstado(true);

console.log(sistema);
console.log('-------------------------------------Sensores simples-------------------------------------------------');
//sistema.comprobarSensores()
console.log('------------------------------------Sensores compuestos------------------------------------------');
let sc1 = new SensorCompuesto(30,[s2,s3]);
sistema.agregar(sc1);
sistema.comprobarSensores()


//console.log(`Estado alarma 1: ${}`)

/*
console.log('-------------------------------------')

console.log(sistema.obtenerSensores());
console.log(sistema.comprobarSensores());*/


abstract class Sensor{

    protected medida: number;
    protected umbral: number;
    protected estado: boolean;
    
    abstract obtenerMedida(): number;
    abstract establecerEstado(e:boolean): void;

    obtenerUmbral(): number{
        return this.umbral;
    }

} 

class SensorSimple extends Sensor{

    constructor(m:number, u:number) {
        super()
        this.medida = m;
        this.umbral = u;
        this.estado = false
    }

    establecerEstado(estado: boolean){
        this.estado = estado;
    }

    obtenerMedida(): number {
        return this.medida;
    }
}

class SensorCompuesto extends Sensor{

    private  sensores: Sensor[] = [];

    constructor(u:number) {
        super()
        this.umbral = u;
        this.estado = false
    }

    agregarSensor(s: Sensor){
        const isExist = this.sensores.indexOf(s);
        if(isExist === -1 ) {
            this.sensores.push(s);
        }else{
            console.log("El sensor ya esta agregado")
        }
    }

    mostrarSensores(): Sensor[]{
        return this.sensores;
    }

    establecerEstado(estado: boolean){
        for (let sensor of this.sensores){
            sensor.establecerEstado(estado)
        }
    }

    obtenerMedida(): number {
        
        let promedio = 0;

        for (const sensor of this.sensores) {
            promedio += sensor.obtenerMedida();
        }

        promedio /= this.sensores.length;

        return promedio;

    }


}

class SistemaAlarma{
    private alarma:boolean;
    private sensores: Sensor[];

    constructor(){
        this.alarma = false;
        this.sensores = [];
    }

    agregarSensor(s: Sensor){
        const isExist = this.sensores.indexOf(s);
        if(isExist === -1 ) {
            this.sensores.push(s);
        }else{
            console.log("El sensor ya esta agregado")
        }
    }

    mostrarSensores(): Sensor[]{
        return this.sensores;
    }

    activarAlarma(){
        if (!this.alarma){
            this.alarma = true;
        }
    }

    comprobarSensores(): void{

        for(const sensor of this.sensores){

            if(sensor.obtenerMedida() > sensor.obtenerUmbral()){
                console.log("Se ha superado el umbral")
                this.activarAlarma();
                break;
            }else{
                console.log("Todo en orden");
            }

        }

    }
}

let s1 = new SensorSimple(21,20);
let s2 = new SensorSimple(20,34);
let s3 = new SensorSimple(24,25);

s1.establecerEstado(true);
s2.establecerEstado(true);
s3.establecerEstado(true);

let sc1 = new SensorCompuesto(30);
sc1.agregarSensor(s1);
sc1.agregarSensor(s2);

let sa = new SistemaAlarma();

sa.agregarSensor(sc1);
sa.agregarSensor(s3);

sa.comprobarSensores();
