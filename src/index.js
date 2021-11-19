import {crearTodoHtml, saludar} from './js/componentes'
import './styles.css';
// import {Todo} from "./classes/todo.class";
// import {TodoList} from "./classes/todo-list.class";

import { Todo, TodoList } from "./classes";

export const todoList = new TodoList();

todoList.todos.forEach( (todo) => {
    crearTodoHtml(todo);
});

// const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(tarea);
//
//
// console.log({todoList});
//
// crearTodoHtml( tarea );

// localStorage.setItem('mi-key', 'ACB1234');
//
// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 2000);
