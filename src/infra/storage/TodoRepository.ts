import Todo from "../../domain/models/Todo";
import ITodoRepository from "../../domain/ports/ITodoRepository";

export default class TodoRepository implements ITodoRepository {

  private todos: Todo[] = [
    new Todo("Estudar arquitetura limpa", true),
    new Todo("Tomar café", false),
    new Todo("Fazer networking", false)
  ];

  getTodos(): Todo[] {
    return this.todos;
  }

  adicionarTodo(todo: Todo): Todo {
    this.todos.push(todo);
    return todo;
  }
}