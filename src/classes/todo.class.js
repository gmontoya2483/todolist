

export class Todo {
    static fromJson({id, tarea, comletado, creado}) {
        const tempTodo = new Todo( tarea);
        tempTodo.id = id;
        tempTodo.completado = comletado;
        tempTodo.creado = creado;

        return tempTodo;


    }

    constructor( tarea ) {
        this.tarea      = tarea;

        this.id         = new Date().getTime();
        this.completado = false;
        this.creado     = new Date();
    }
}
