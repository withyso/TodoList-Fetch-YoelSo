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

	//Fetch and Api functions
	const getURL = "https://playground.4geeks.com/todo/"
	fetch(getURL + "users/yoelwithy")
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			setTaskData(data.todos)
		})
		.catch((error) => { return error })

	const [taskData, setTaskData] = useState([])
	const [inputData, setInputData] = useState('');
	let arrAmmount = taskData.length;

	//Handle local data and Array functions
	const handleKeydown = (e) => {
		if (e.key == 'Enter' && inputData !== '') {
			console.log(`la tarea se ha enviado satisfactoriamente con el valor: ${inputData}`)
			setTaskData([...taskData, { label: inputData, id: crypto.randomUUID() }])
			setInputData('')
		}
		else console.log("Aun no se envia la tarea o no se presiona Enter")
	}

	function taskFilter() {
		if (arrAmmount <= 0) {
			return "There is no active task. Please add one";
		}
		if (arrAmmount == 1) {
			return `${arrAmmount} active task`;
		}
		if (arrAmmount >= 1) {
			return `${arrAmmount} active tasks`;
		}
	}

	const deleteTask = (taskName) => {
		console.log('procesando solicitud de borrado')
		console.log('arreglo encontrado.., Valor es igual a:', taskName)
		let copyList = [...taskData];
		let newList = copyList.filter((task) => task.label !== taskName);
		setTaskData(newList)
		console.log(newList)
	}

	return (
		<div className="mb-2 container fullcontainer">
			<div className="mt-5" id="todosBox">
				<div className="inputBox mt-3 mb-3">
					<input className="inputText fs-3 form-control" type="text" name="" value={inputData} id="" placeholder="What needs to be done?"
						onChange={(e) => {
							setInputData(e.target.value)
						}}
						onKeyDown={handleKeydown}
					/>
				</div>
				<div className="taskBox">
					{taskData.map((task) => {
						return <ToDoArr key={task.id} tarea={task} funcionDeBorrado={deleteTask} />
					})}
				</div>
				<div className="footer">{taskFilter()}</div>
			</div>
		</div >
	);
};

export default Home;
