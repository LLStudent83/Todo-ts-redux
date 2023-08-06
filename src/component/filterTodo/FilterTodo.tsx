/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from "react";
import "./filterTodo.scss";
import type { FilterType } from "../app/App";

type Props = {
  onFilter: (value: FilterType) => void;
  activeFilter: FilterType;
};

export default function FilterTodo({
  onFilter,
  activeFilter,
}: Props): JSX.Element {
  return (
    <fieldset className="filterTodo__wrapper">
      <legend>Выберите задачи для просмотра</legend>
      <div>
        <input
          checked={activeFilter === "complete"}
          type="radio"
          id="completed"
          name="todoFilter"
          value="complete"
          onChange={(e) => onFilter(e.target.value as FilterType)}
        />
        <label htmlFor="completed">выполненные задачи</label>
      </div>
      <div>
        <input
          checked={activeFilter === "unComplete"}
          type="radio"
          id="uncompleted"
          name="todoFilter"
          value="unComplete"
          onChange={(e) => onFilter(e.target.value as FilterType)}
        />
        <label htmlFor="uncompleted">НЕ выполненные задачи</label>
      </div>
      <div>
        <input
          checked={activeFilter === "all"}
          type="radio"
          id="all"
          name="todoFilter"
          value="all"
          onChange={(e) => onFilter(e.target.value as FilterType)}
        />
        <label htmlFor="all">ВСЕ задачи</label>
      </div>
    </fieldset>
  );
}
