import React from "react";


export const ToDoArr = ({ tarea, funcionDeBorrado }) => {
    return (
        <div>
            <ul>
                <li className="list-group-item liBox ps-4 fs-5 text-white"> {tarea.name}
                    <i className="fa-solid fa-x pe-4" onClick={() => {
                        funcionDeBorrado(tarea.name)
                    }}> </i> </li>
            </ul>
        </div>
    );
};