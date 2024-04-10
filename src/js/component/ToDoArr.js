import React from "react";


export const ToDoArr = ({ tarea, funcionDeBorrado }) => {
    return (
        <div className="container">
            <ul>
                <li className="list-group-item"> {tarea.name}
                    <i className="fa-solid fa-x" onClick={() => {
                        funcionDeBorrado(tarea.name)
                    }}> </i> </li>
            </ul>
        </div>
    );
};