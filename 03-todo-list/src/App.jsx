import { useState } from 'react'
import TodoList from './components/TodoList'

const INITIAL_TASKS = ["pasear al perro", "regar las plantas", "entrenar", "leer 20 páginas"]

function App() {
  /* ESTADOS DE MI APP */
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [currentTask, setCurrentTask] = useState("");


/*   const addTask = (newTask) => {
    if(newTask.trim() == "") return
    setTasks([...tasks, newTask.trim()])
  };
*/

  /* otra forma de hacer esto un poco mas dificil*/
  const addTask = (newTask) => {
    if(newTask.trim() == "") return
    setTasks( ( prevState ) => [...prevState, newTask.trim()] )
    setCurrentTask("")
  }

  const deleteTask = (index) => {
    const listFilterTask = tasks.filter( (_, id) =>  index != id )
    setTasks(listFilterTask)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input 
      value={currentTask} 
      type="text" 
      placeholder="Nueva tarea" 
      onChange={ (event) => setCurrentTask(event.target.value) }
      />
      <button onClick={() => addTask(currentTask)}>Agregar tarea</button>
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  )
}

export default App