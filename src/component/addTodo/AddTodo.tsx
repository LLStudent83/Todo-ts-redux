import * as React from "react";
import { useState } from "react";
import "./addTodo.scss";
import { useDispatch, useSelector } from "react-redux";
import { addTodoCreator } from "../../store/todoReducer";
import { nanoid } from "nanoid";

function AddTodo(): JSX.Element {
  const [stateInput, setStateInput] = useState("");
  const dispatch = useDispatch();

  function hendleChangeInput(value: string): void {
    setStateInput(value);
  }

  function submitHendler(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (stateInput.trim().length > 0) {
      dispatch(
        addTodoCreator({
          id: nanoid(),
          completed: false,
          title: stateInput,
          visible: true,
        })
      );
      setStateInput("");
    }
  }

  return (
    <form className="addTodo_form" onSubmit={submitHendler}>
      <input
        type="text"
        value={stateInput}
        onChange={(e) => hendleChangeInput(e.target.value)}
      />
      <button className="addTodo_button" type="submit">
        Add todo
      </button>
    </form>
  );
}

export default AddTodo;
