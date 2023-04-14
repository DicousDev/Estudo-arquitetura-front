import Todo from "../models/Todo";

export default interface ITodoRepository {

  getTodos(): Todo[];
  adicionarTodo(todo: Todo): Todo;
}