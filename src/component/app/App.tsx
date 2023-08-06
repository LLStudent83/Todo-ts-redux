import * as React from "react";
import type { TodoType } from "../../store/todoReducer";
import TodoList from "../todoList/TodoList";
import AddTodo from "../addTodo/AddTodo";
import FilterTodo from "../filterTodo/FilterTodo";
import { useAppSelector } from "../../store/reduxHooks";
import "./app.scss";

export type FilterType = "all" | "unComplete" | "complete";

function App(): JSX.Element {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div className="wrapper">
      <h1>Список задач</h1>
      <AddTodo />
      <FilterTodo />
      {todos.length !== 0 ? <TodoList /> : <p>No todo</p>}
    </div>
  );
}

export default App;
export type { TodoType };
