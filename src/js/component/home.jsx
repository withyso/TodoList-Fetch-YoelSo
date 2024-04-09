import React from "react";
import { useState } from "react";
import { ToDoArr } from "./ToDoArr";

/*To Dos application 

- Input to receiv data X Done
- State to save data from input X Done
- Array to save data from state (component)
	(push to store new info?)
- .Map to render array info 
*/

//create your first component
const Home = () => {
	const [taskData, setTaskData] = useState([{ value: 'Make your bed', id: crypto.randomUUID() }, { value: 'Do your Homework', id: crypto.randomUUID() }])
	const [inputData, setInputData] = useState('');

	const handleKeydown = (e) => {
		if (e.key == 'Enter' && inputData !== '') {
			console.log(`la tarea se ha enviado satisfactoriamente con el valor: ${inputData}`)
			setTaskData([...taskData, { value: inputData, id: crypto.randomUUID() }])
			setInputData('')
		}
		else console.log("Aun no se envia la tarea o no se presiona Enter")

	}

	const deleteTask = (arreglo, taskIndex) => {
		/* 
		let newList = arreglo.filter((newTask) => { newTask.id !== selectedTask.target.id });
		console.log(newList)
		*/
	}

	return (
		<div className="text-center container ms-2 pe-2">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<input type="text" name="" value={inputData} id="" placeholder="What needs to be done?"
				onChange={(e) => {
					setInputData(e.target.value)
				}}
				onKeyDown={handleKeydown}
			/>
			<ToDoArr arreglo={taskData} funcionDeBorrado={deleteTask} />
		</div>
	);
};

export default Home;
