import React from "react";
// import './App.css';

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const todos = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'tomar el curso de react', completed: false },
  { text: 'Lorrar con la llorona', completed: false },
]

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      
      <TodoList>
        {
          todos.map( todo => (
            <TodoItem key={todo.text} text={todo.text}/>
          ))
        }
      </TodoList>
      
      <CreateTodoButton />

  </React.Fragment>
  );
}

export default App;
