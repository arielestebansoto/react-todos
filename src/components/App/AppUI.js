import React from 'react'

import { TodoContext } from '../TodoContext';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

export function AppUi() {
    const { 
        error, 
        loading, 
        searchedTodos,
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos, 
        completedTodos,
        searchValue, 
        setSearchValue,
    } = React.useContext(TodoContext)
    return (
        <React.Fragment>
            <TodoHeader>
                <TodoCounter 
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch 
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>
            
            <TodoList>
                { error && <p>CSM</p> }
                { loading && <p>Loading...</p> }
                {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}
                
                {
                searchedTodos.map( todo => (
                    <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    />
                ))
                }
            </TodoList>
            {
                !!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )
            }
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

        </React.Fragment>    
    )
}