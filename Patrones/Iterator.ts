interface IteradorInterfaz<T>{
    current(): T; // Devuelve el objeto actual
    siguiente(): T; // Devuelve el elemento actual y avanza al siguiente
    key(): number; // Devuelve la clave del elemnto actual.
    valid(): boolean; // Verifica si la posicion actual es valida.
    rewind(): void; // Reinicia el iterador al primer elemento.
}

interface Aggregator{
    getIterator(): IteradorInterfaz<string>; // Obtiene un iterador externo.
}

class OrdenAlfabeticoIterador implements IteradorInterfaz<string>{
    private collection: WordsCollection;
    private position: number = 0;
    private reverse: boolean = false;

    constructor(collection: WordsCollection, reverse: boolean = false){
        this.collection = collection;
        this.reverse = reverse;
        if(reverse){
            this.position = collection.getCount() - 1;
        }
    }
    current(): string {
        return this.collection.getItems()[this.position];
    }

    public rewind(): void {
        this.position = this.reverse ? this.collection.getCount() - 1 : 0;
    }

    public key(): number {
        return this.position;
    }

    public siguiente(): string{
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }

    public valid(): boolean {
        if(this.reverse){
            return this.position >= 0;
        }
        return this.position < this.collection.getCount();
    }
}

class WordsCollection implements Aggregator{
    private items: string[] = [];

    public getItems(): string[]{
        return this.items;
    }

    public getCount(): number{
        return this.items.length;
    }

    public addItem(item: string): void{
        this.items.push(item);
    }

    public getIterator(): IteradorInterfaz<string> {
        return new OrdenAlfabeticoIterador(this);
    }
}

// Uso del patrón iterador
const collection = new WordsCollection();
collection.addItem('Primero');
collection.addItem('Segundo');
collection.addItem('Tercero');

const interator = collection.getIterator();
console.log('Recorrido directo');
while (interator.valid()){
    console.log(interator.siguiente());
}

console.log('');

console.log('Recorrido inverso:')
const reverseIterator = collection.getIterator();
while(reverseIterator.valid()){
    console.log(reverseIterator.siguiente());
}

