import React from "react";
import Todo from "./Todo";
import "../../App.css";

const TodoList = ({ todos, removeTodo, completeTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((item, index) => (
        <Todo {...{ item, index, removeTodo, completeTodo }} />
      ))}
    </ul>
  );
};

export default TodoList;
