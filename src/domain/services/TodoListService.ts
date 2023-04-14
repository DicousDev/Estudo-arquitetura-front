import Todo from "../models/Todo";
import ITodoRepository from "../ports/ITodoRepository";
import ITodoServer from "../ports/ITodoServer";

export class TodoListService {

  repository: ITodoRepository;
  server: ITodoServer;

  constructor(repository: ITodoRepository, server: ITodoServer) {
    this.repository = repository;
    this.server = server;
  }

  getTodos(): Todo[] {
    return this.server.getTodos();
  }

  adicionar(todo: Todo): Todo {
    return this.repository.adicionarTodo(todo);
  }

  finalizar(todo: Todo): Todo {
    return todo.finalizar();
  }
}