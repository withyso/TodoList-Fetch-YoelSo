import React from "react";
import react from "react";
import { useState } from "react";



export const ToDoArr = ({ arreglo }) => {
    const mappedArray = arreglo.map((item) => {
        return (<li className="list-group-item" key={item.id}>{item.value}</li>)
    })
    return (
        <div className="container">
            <ul>
                {mappedArray}
            </ul>
        </div>
    );
};