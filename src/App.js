import { Header } from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./MyComponents/AddTodo";
import { Contact } from './MyComponents/Contact';
import { About } from './MyComponents/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("OnDelete pressed of ", todo);
    setTodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, description) => {
    console.log("Adding this todo", title, description);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    };
    setTodo([...todos, myTodo]);

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    <Header title="Todo | Siksha" searchBar="true" />
    <Router>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    <AddTodo addTodo={addTodo} />
    <Todos todos={todos} onDelete={onDelete} />
    <Footer />
    </>
  );
}

export default App;
