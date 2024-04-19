import React from "react";


export const ToDoArr = ({ tarea, funcionDeBorrado }) => {
    return (
        <div>
            <ul>
                <li className="list-group-item liBox ps-4 fs-5 text-dark p-1"> {tarea.label}
                    <i className="fa-solid fa-x pe-4" onClick={() => {
                        funcionDeBorrado(tarea.id)
                    }}> </i> </li>
            </ul>
        </div>
    );
};