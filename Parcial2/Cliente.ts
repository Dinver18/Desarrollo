// Definición del Enum Estado
export enum Estado {
    Activo,
    Suspendido,
}

// Clase Direccion
export class Direccion {
    constructor(
        private direccion: string,
        private codigo_postal?: string,
        private pais?: string
    ) { }

    // Método para obtener la dirección completa
    getDireccion(): string {
        return this.direccion;
    }

    // Método para obtener el código postal
    getCodigo() {
        
        if(!this.codigo_postal){
            return null
        }

        return this.codigo_postal;
    }

    // Método para obtener el país
    getPais(): string | undefined{
        return this.pais;
    }
}

// Clase Cliente
export class Cliente {
    private saldo: number;

    constructor(
        private nombre: string,
        private telefono: string,
        private direccion: Direccion,
        private status: Estado,
        private credito: number,
        saldo: number
    ) {
        this.saldo = saldo;
    }

    getTelefono(){
        return this.telefono
    }

    getCredito(){
        return this.credito
    }

    getStatus(){
        return this.status
    }

    getDireccion(){
        return this.direccion
    }

    getSaldo(){
        return this.saldo
    }
    
} 