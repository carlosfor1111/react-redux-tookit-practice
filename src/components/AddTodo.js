import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (value.trim().length === 0) {
      alert("Enter a task before adding !!");
      setValue("");
      return;
    }

    dispatch(
      addTask({
        task: value,
      })
    );
    setValue("");
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        className="task-input"
        placeholder="Add task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button className="task-button" onClick={onSubmit}>
        Save
      </button>
    </div>
  );
};

export default AddTodo;
