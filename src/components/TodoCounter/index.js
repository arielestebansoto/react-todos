import React from "react";

import './TodoCounter.css'

export function TodoCounter({ totalTodos, completedTodos }) {
    
    return (
        <h2 className="TodoCounter">{`Has Completado ${completedTodos} de ${totalTodos} TODOs`}</h2>
    )
}