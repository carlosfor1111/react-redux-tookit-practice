import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => {
    return state.tasks;
  });
  return (
    <ul className="tasks-list">
      {todos.map((t) => (
        <TodoItem id={t.id} key={t.id} title={t.name} />
      ))}
    </ul>
  );
};

export default TodoList;