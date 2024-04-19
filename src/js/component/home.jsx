import React from "react";
import { useState, useEffect } from "react";
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

	useEffect(() => {
		fetch(getURL + "users/yoelwithy")
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				setTaskData(data.todos)
			})
			.catch((error) => { return error })
	}, [])

	const getData = () => {
		fetch(getURL + "users/yoelwithy")
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				setTaskData(data.todos)
			})
			.catch((error) => { return error })
	}

	const sendTask = (labelValue) => {
		fetch(getURL + "todos/yoelwithy", {
			method: "POST",
			body: JSON.stringify({ "label": `${labelValue}`, "is_done": false }),
			headers: {
				'content-type': 'application/json'
			}
		})
			.then(response => {
				if (!response.ok) throw Error(response.statusText);
				return response.json();
			})
			.then(response => {
				console.log('success', response)
				getData();
			})
			.catch((error) => console.log(error))
	}

	const deleteTask = (taskID) => {
		console.log('objeto encontrado.., ID es igual a:', taskID)
		fetch(getURL + `todos/${taskID}`, {
			method: "DELETE",
			headers: {
				'content-type': 'application/json'
			}
		})
			.then((response) => {
				response.json()
				getData();
			})
			.then((response) => {
				console.log('success', response)
			})
			.catch((error) => { return error })
	}


	const [taskData, setTaskData] = useState([])
	const [inputData, setInputData] = useState('');
	const [eachTaskInfo, setEachTaskInfo] = useState({});
	let arrAmmount = taskData.length;

	//Handle local data and Array functions
	const handleKeydown = (e) => {
		if (e.key == 'Enter' && inputData !== '') {
			console.log(`la tarea se ha enviado satisfactoriamente con el valor: ${inputData}`)
			sendTask(inputData);
			console.log(inputData)
			setInputData('');
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
