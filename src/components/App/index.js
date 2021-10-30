import React from "react";

import { AppUi } from "./AppUI";

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Kinesiologia', completed: false },
  { text: 'tomar el curso de react', completed: false },
  { text: 'Lorar con la llorona', completed: false },
]

function App() {
  const [ todos, setTodos ] = React.useState(defaultTodos)
  const [ searchValue, setSearchValue ] = React.useState('')

  const completedTodos = todos.filter(todos => !!todos.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  return (
    <AppUi 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
