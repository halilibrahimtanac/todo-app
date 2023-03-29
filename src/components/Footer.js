import React from "react";
import "../App.css";

const Footer = ({ todosLength, selectedFilter, filterTodos }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todosLength} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={selectedFilter === "all" ? "selected" : ""}
            onClick={() => filterTodos("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={selectedFilter === "active" ? "selected" : ""}
            onClick={() => filterTodos("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={selectedFilter === "completed" ? "selected" : ""}
            onClick={() => filterTodos("completed")}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        className="clear-completed"
        onClick={() => filterTodos("clear-completed")}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
