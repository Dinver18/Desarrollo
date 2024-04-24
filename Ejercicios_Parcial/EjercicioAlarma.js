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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sensor = /** @class */ (function () {
    function Sensor() {
    }
    Sensor.prototype.obtenerUmbral = function () {
        return this.umbral;
    };
    return Sensor;
}());
var SensorSimple = /** @class */ (function (_super) {
    __extends(SensorSimple, _super);
    function SensorSimple(m, u) {
        var _this = _super.call(this) || this;
        _this.medida = m;
        _this.umbral = u;
        _this.estado = false;
        return _this;
    }
    SensorSimple.prototype.establecerEstado = function (estado) {
        this.estado = estado;
    };
    SensorSimple.prototype.obtenerMedida = function () {
        return this.medida;
    };
    return SensorSimple;
}(Sensor));
var SensorCompuesto = /** @class */ (function (_super) {
    __extends(SensorCompuesto, _super);
    function SensorCompuesto(u) {
        var _this = _super.call(this) || this;
        _this.sensores = [];
        _this.umbral = u;
        _this.estado = false;
        return _this;
    }
    SensorCompuesto.prototype.agregarSensor = function (s) {
        var isExist = this.sensores.indexOf(s);
        if (isExist === -1) {
            this.sensores.push(s);
        }
        else {
            console.log("El sensor ya esta agregado");
        }
    };
    SensorCompuesto.prototype.mostrarSensores = function () {
        return this.sensores;
    };
    SensorCompuesto.prototype.establecerEstado = function (estado) {
        for (var _i = 0, _a = this.sensores; _i < _a.length; _i++) {
            var sensor = _a[_i];
            sensor.establecerEstado(estado);
        }
    };
    SensorCompuesto.prototype.obtenerMedida = function () {
        var promedio = 0;
        for (var _i = 0, _a = this.sensores; _i < _a.length; _i++) {
            var sensor = _a[_i];
            promedio += sensor.obtenerMedida();
        }
        promedio /= this.sensores.length;
        return promedio;
    };
    return SensorCompuesto;
}(Sensor));
var SistemaAlarma = /** @class */ (function () {
    function SistemaAlarma() {
        this.alarma = false;
        this.sensores = [];
    }
    SistemaAlarma.prototype.agregarSensor = function (s) {
        var isExist = this.sensores.indexOf(s);
        if (isExist === -1) {
            this.sensores.push(s);
        }
        else {
            console.log("El sensor ya esta agregado");
        }
    };
    SistemaAlarma.prototype.mostrarSensores = function () {
        return this.sensores;
    };
    SistemaAlarma.prototype.activarAlarma = function () {
        if (!this.alarma) {
            this.alarma = true;
        }
    };
    SistemaAlarma.prototype.comprobarSensores = function () {
        for (var _i = 0, _a = this.sensores; _i < _a.length; _i++) {
            var sensor = _a[_i];
            if (sensor.obtenerMedida() > sensor.obtenerUmbral()) {
                console.log("Se ha superado el umbral");
                this.activarAlarma();
                break;
            }
            else {
                console.log("Todo en orden");
            }
        }
    };
    return SistemaAlarma;
}());
var s1 = new SensorSimple(21, 20);
var s2 = new SensorSimple(20, 34);
var s3 = new SensorSimple(24, 25);
s1.establecerEstado(true);
s2.establecerEstado(true);
s3.establecerEstado(true);
var sc1 = new SensorCompuesto(30);
sc1.agregarSensor(s1);
sc1.agregarSensor(s2);
var sa = new SistemaAlarma();
sa.agregarSensor(sc1);
sa.agregarSensor(s3);
sa.comprobarSensores();
