import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [selectedFilter, setSelectedFilter] = useState("all");

  // when we add or remove a todo this will also update the filteredTodos because we are using this state in view
  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const addNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // removes todo by index
  const removeTodo = (index) => {
    setTodos(todos.filter((t, i) => i !== index));
  };

  // updates completed state of the todo in the given index
  const completeTodo = (index) => {
    let updatedTodos = [...todos];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;

    setTodos(updatedTodos);
  };

  // using switch-case to execute certain filter operation passed by footer filter buttons
  const filterTodos = (selectedButton) => {
    switch (selectedButton) {
      case "all":
        setSelectedFilter(selectedButton);
        setFilteredTodos(todos);
        break;
      case "active":
        setSelectedFilter(selectedButton);
        setFilteredTodos(todos.filter((t) => t.isCompleted === false));
        break;
      case "completed":
        setSelectedFilter(selectedButton);
        setFilteredTodos(todos.filter((t) => t.isCompleted === true));
        break;
      case "clear-completed":
        setTodos(todos.filter((t) => t.isCompleted === false));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <section className="todoapp">
        <Header addNewTodo={addNewTodo} />
      </section>

      <section className="main">
        <TodoList {...{ todos: filteredTodos, completeTodo, removeTodo }} />
      </section>

      <Footer {...{ filterTodos, todosLength: todos.length, selectedFilter }} />
    </>
  );
}

export default App;
