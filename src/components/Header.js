import React from "react";
import "../App.css";
import Form from "./Form";

const Header = ({ addNewTodo }) => {
  return (
    <div className="header">
      <h1>todos</h1>

      <Form addNewTodo={addNewTodo} />
    </div>
  );
};

export default Header;
