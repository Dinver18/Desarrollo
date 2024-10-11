// Definición del Enum Estado
export enum Estado {
    Activo,
    Suspendido,
}

// Clase Direccion
export class Direccion {
    constructor(
        private direccion: string,
        private codigo_postal: string,
        private pais: string
    ) { }

    // Método para obtener la dirección completa
    getDireccion(): string {
        return this.direccion;
    }

    // Método para obtener el código postal
    getCodigo(): string {
        return this.codigo_postal;
    }

    // Método para obtener el país
    getPais(): string {
        return this.pais;
    }
}

// Clase Cliente
export class Cliente {
    private saldo: string;

    constructor(
        private nombre: string,
        private telefono: string,
        private direccion: Direccion,
        private status: Estado,
        private credito: number,
        saldo: string
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
    
} 