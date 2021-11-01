import React from 'react'
import { withStorageListener } from './withStorageListener'

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div>
                <p>Hubo Cambios!!!</p>
                <button
                    onClick={() => toggleShow(false)}
                >
                    Volver a cargar la informacion
                </button>
            </div>
        )
    } else {
        return null
    }
}

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)