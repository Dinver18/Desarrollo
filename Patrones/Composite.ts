// Clase abstracta que representa un componente
abstract class Component{
    
    public abstract operation(): string;

}

// Clase que representa un archivo simple
class Leaf extends Component{
    public operation(): string {
        return 'Leaf';
    }
}

// Clase que representa un directorio
class Composite extends Component{

    private children: Component[] = [];

    add(component: Component): void {
        this.children.push(component);
    }

    remove(component: Component): void{
        const index = this.children.indexOf(component);
        if(index !== -1){
            this.children.splice(index,1);
        }
    }

    public operation(): string {
        const childResults = this.children.map((child) =>
            child.operation()).join(', ');
        return `Composite [${childResults}]`;
    }
}

// Uso del patrón Composite
const root = new Composite();
const file1 = new Leaf();
const file2 = new Leaf();
const folder = new Composite();

folder.add(file1);
folder.add(file2);
root.add(folder);

console.log(root.operation());