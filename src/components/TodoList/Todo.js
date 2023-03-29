import React from "react";
import "../../App.css";

const Todo = ({ item, index, removeTodo, completeTodo }) => {
  return (
    <li className={item.isCompleted ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={() => completeTodo(index)}
        />
        <label>{item.todo}</label>
        <button className="destroy" onClick={() => removeTodo(index)}></button>
      </div>
    </li>
  );
};

export default Todo;
