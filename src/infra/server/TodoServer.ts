import Todo from "../../domain/models/Todo";
import ITodoServer from "../../domain/ports/ITodoServer";

export default class TodoServer implements ITodoServer {

  getTodos(): Todo[] {
    console.log("Comunicando com API de TodoList para obter todas tarefas");
    return [
      new Todo("Estudar arquitetura limpa", true),
      new Todo("Tomar café", false),
      new Todo("Fazer networking", false)
    ];
  }
  adicionarTodo(todo: Todo): Todo {
    console.log("Comunicando com API de TodoList para adicionar uma Todo");
    return todo;
  }
}