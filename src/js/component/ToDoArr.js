import React from "react";
import react from "react";
import { useState } from "react";



export const ToDoArr = ({ arreglo, funcionDeBorrado }) => {
    const mappedArray = arreglo.map((item) => {
        return (
            <li className="list-group-item" key={item.id}>{item.value}
                <i className="fa-solid fa-x" onClick={(selectedTask) => {
                    funcionDeBorrado(arreglo, item.value)
                }}> </i> </li>)
    })
    return (
        <div className="container">
            <ul>
                {mappedArray}
            </ul>
        </div>
    );
};