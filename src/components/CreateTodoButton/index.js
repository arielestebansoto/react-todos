import React from 'react'

import './CreateTodoButton.css'

export function CreateTodoButton() {
    const onClickButton = (msg) => {
        alert(msg)
    }
    return (
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton('Aqui se deberia abrir un modal')}
        >
            +
        </button>
    )
}