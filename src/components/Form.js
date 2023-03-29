import React, { useState } from "react";
import "../App.css";

const Form = ({ addNewTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (newTodo !== "") {
      setNewTodo("");
      addNewTodo({ todo: newTodo, isCompleted: false });
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit" style={{ display: "none" }}></button>
    </form>
  );
};

export default Form;
