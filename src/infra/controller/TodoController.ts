import Todo from "../../domain/models/Todo";
import { TodoListService } from "../../domain/services/TodoListService";
import ITodoPort from "../interfaces/ITodo";
import TodoServer from "../server/TodoServer";
import TodoRepository from "../storage/TodoRepository";

export default class TodoController implements ITodoPort {

  todoList: TodoListService;

  constructor() {
    this.todoList = new TodoListService(new TodoRepository(), new TodoServer());
  }

  getTodos(): Todo[] {
    return this.todoList.getTodos();
  }
  
  adicionarTodo(todo: Todo): any {
    this.todoList.adicionar(todo);
  }
}