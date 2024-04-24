class context{
    private state: State;

    constructor(state: State){
        this.transitionTo(state);
    }

    public transitionTo(state: State){
        console.log(`Context: Transition to ${(<State>state).constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }

    public doThis(): void{
        this.state.doThis();
    }

    public doThat(): void{
        this.state.doThat();
    }

}

abstract class State {
    protected context: context;

    public setContext(context: context){
        this.context = context;
    }

    public abstract doThis();
    public abstract doThat();
}

class concreteStateA extends State{
    public doThis() {
        console.log('ConcreteStateA handles doThis.');
        console.log('ConcreteStateA wants to change the state of the context.');
        this.context.transitionTo(new ConcreteStateB());
    }

    public doThat() {
        console.log("ConcrecteStateA handles doThat");
    }
}

class ConcreteStateB extends State{
    public doThis() {
        console.log("ConcreteStateB handles doThis.");
    }

    public doThat() {
        console.log('ConcreteStateB handles doThat.');
        console.log('ConcreteStateB wants to change the state of the context.');
        this.context.transitionTo(new concreteStateA());
    }
}

const contexto = new context(new concreteStateA());
contexto.doThis();
contexto.doThat();