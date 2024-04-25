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
