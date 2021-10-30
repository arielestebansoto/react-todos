import React from "react";

import { AppUi } from "./AppUI";

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Kinesiologia', completed: false },
//   { text: 'tomar el curso de react', completed: false },
//   { text: 'Lorar con la llorona', completed: false },
// ]

function useLocalStorage(itemName, initialValue) {
  const [ loading, setLoading ] = React.useState(true)
  const [ error, setError ] = React.useState(false)
  // window.localStorage.removeItem(itemName)
  const [ item, setItem ] = React.useState(initialValue)

  React.useEffect( () => {
    try {
        setTimeout( () => {
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue
          } else {
            parsedItem = JSON.parse(localStorageItem)
          }
          setItem(parsedItem)
          setLoading(false)
        },  1000)
      } catch (err) {
        setError(err)
      }
  }, [itemName, initialValue])


  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch (err) {
      setError(err)
    }
    }

  return {
    item, 
    saveItem,
    loading,
    error 
  }
  
}

function App() {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])

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
    saveTodos(newTodos)
  }
  
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  // console.log('Render antes del useEffect')

  // React.useEffect(() => {
  //   console.log('useEffect')
  // }, [totalTodos])

  // console.log('Render DESPUES del useEffect')

  return (
    <AppUi
      loading={loading}
      error={error} 
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
