import * as React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import type { TodoType } from "../../store/todoReducer";
import TodoList from "../todoList/TodoList";
import AddTodo from "../addTodos/AddTodos";
import FilterTodo from "../filterTodo/FilterTodo";
import "./app.scss";

export type FilterType = "all" | "unComplete" | "complete";

function App(): JSX.Element {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const toggleTodo = (id: string): void => {
    setTodos(
      todos.map((todo: TodoType) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  function addTodo(title: string): void {
    setTodos(
      todos.concat({
        id: nanoid(),
        completed: false,
        title,
        visible: activeFilter !== "complete",
      })
    );
  }

  function filterTodo(value: "all" | "unComplete" | "complete"): void {
    if (value === "all") {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          Object.defineProperty(todo, "visible", { value: true })
        )
      );
    }
    if (value === "unComplete") {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.completed
            ? Object.defineProperty(todo, "visible", { value: false })
            : Object.defineProperty(todo, "visible", { value: true })
        )
      );
    }
    if (value === "complete") {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.completed
            ? Object.defineProperty(todo, "visible", { value: true })
            : Object.defineProperty(todo, "visible", { value: false })
        )
      );
    }
  }

  function onFilter(value: FilterType): void {
    if (value === activeFilter) return;
    setActiveFilter(value);
    filterTodo(value);
  }

  return (
    <div className="wrapper">
      <h1>Список задач</h1>
      <AddTodo onCreate={(title) => addTodo(title)} />
      <FilterTodo
        onFilter={(value: "all" | "unComplete" | "complete") => {
          onFilter(value);
        }}
        activeFilter={activeFilter}
      />
      {todos.length !== 0 ? (
        <TodoList todos={todos} onToggle={toggleTodo} />
      ) : (
        <p>No todo</p>
      )}
    </div>
  );
}

export default App;
export type { TodoType };
