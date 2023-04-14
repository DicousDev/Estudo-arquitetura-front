import React, { useEffect, useState } from "react";
import TodoController from "../../infra/controller/TodoController";
import Todo from "../../domain/models/Todo";
import ITodo from "../../infra/interfaces/ITodo";

export const TodoList: React.FC = () => {

  const controller: ITodo = new TodoController();
  const [todos, setTodos] = useState<Todo[]>();

  useEffect(() => {
    setTodos(controller.getTodos());
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {
          todos?.map(todo => {
            return <li>{todo.descricao}</li>;
          })
        }
      </ul>
    </div>
  );
}