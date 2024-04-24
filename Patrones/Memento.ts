class Optional<T> {
    private value: T | undefined;
    private assigned: boolean;
  
    constructor(value?: T) {
      if (value) {
        this.value = value;
        this.assigned = true;
      } else {
        this.value = undefined;
        this.assigned = false;
      }
    }
  
    hasValue(): boolean {
      return this.assigned;
    }
  
    getValue(): T {
      if (!this.assigned) throw Error();
      return <T>this.value;
    }
}

class Originator {
    private state: string;

    constructor(state: string) {
        this.state = state;
        console.log(`Originator: My initial state is: ${state}`);
    }

    save(): Memento{
        let m: Memento = new ConcreteMemento();

        m.setState(this.state);

        return m;
    }

    restore(m: Memento): void {
        if (m instanceof ConcreteMemento){
            this.state = m.getState();
        }
    }
}

interface Memento{
    setState(s: string): void;
}

class ConcreteMemento implements Memento{

    private state: string; 

    constructor(){
        this.state = "";
    }

    setState(s: string){
        this.state = s;
    }

    getState(): string{
        return this.state;
    }
    
}

class Caretaker{
    private originator: Originator
    private history: Memento[] = [];

    doSomething(){
        let m = this.originator.save();
        this.history.push(m);
    }

    undo(){
        const memento = new Optional<Memento>(this.history.pop());
        if(memento.hasValue()){
            this.originator.restore(memento.getValue());
        }else{
            console.log("No hay nigun estado guardado")
        }
    };
}