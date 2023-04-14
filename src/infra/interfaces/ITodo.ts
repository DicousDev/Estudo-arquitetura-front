import Todo from "../../domain/models/Todo";

export default interface ITodo {
  
  getTodos(): Todo[];
  adicionarTodo(todo: Todo): any;
}