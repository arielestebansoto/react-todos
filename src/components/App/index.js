import React from "react";

import { useTodos } from './useTodos'
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { ChangeAlertWithStorageListener } from '../ChangeAlert'

function App() {
  const { 
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    sincronizeTodos,
} = useTodos()

  return (
    <React.Fragment>
    <TodoHeader loading={loading}>
        <TodoCounter 
            totalTodos={totalTodos}
            completedTodos={completedTodos}
        />
        <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
    </TodoHeader>
    
    <TodoList
        totalTodos={totalTodos}
        error={error}
        loading={loading} 
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <p>Error...</p>}
        onLoading={() => <p>Loading...</p>}
        onEmptyTodos={() => <p>Empty Todos</p>}
        onEmptySearchResults={
            (searchText) => <p>No hay resultados para: {searchText}, pa!</p>}
        // render={
        //     todo => (
        //         <TodoItem 
        //             key={todo.text} 
        //             text={todo.text} 
        //             completed={todo.completed}
        //             onComplete={() => completeTodo(todo.text)}
        //             onDelete={() => deleteTodo(todo.text)}
        //         />
        //     )
        // }
    >
        {
            todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
            )
        }
    </TodoList>
    {
        !!openModal && (
            <Modal>
                <TodoForm 
                  addTodo={addTodo}
                  setOpenModal={setOpenModal}
                />
            </Modal>
        )
    }
    <CreateTodoButton
        setOpenModal={setOpenModal}
    />
    <ChangeAlertWithStorageListener 
        sincronize={sincronizeTodos}
    />
    </React.Fragment>  
  );
}

export default App;