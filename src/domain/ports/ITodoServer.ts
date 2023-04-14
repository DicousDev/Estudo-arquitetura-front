import Todo from "../models/Todo";

export default interface ITodoServer {

  getTodos(): Todo[];
  adicionarTodo(todo: Todo): Todo;
}