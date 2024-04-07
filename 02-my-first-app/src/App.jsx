import "./app.css"
import { useState } from "react"

const MOCK_TAREAS = ["pasear al perro", "regar las plantas", "entrenar", "leer 20 páginas"]

export function CartTask({tarea}) {

  const [estado, setEstado] = useState(false)

  const styles = estado ? {textDecoration: "line-through"} : {}

  return (
    <fieldset >
      <p style={styles}>{tarea}</p>
      <div>
        <button onClick={() => setEstado(!estado)} >{estado?"♻":"✅"}</button>
        <button>⛔</button>
      </div>
    </fieldset>
  )
}


function App() {

  const [listadoTareas, setListadoTareas] = useState(MOCK_TAREAS)
  const [tareaActual, setTareaActual] = useState("")

  function agregarTarea() {
    return setListadoTareas([...listadoTareas, tareaActual])
  }

  return (
    <main>
      <h1>😎TODO LIST😎</h1>
      <h2>CON REACT + VITE</h2>

      <fieldset className="todo">
        <input type="text" value={tareaActual} onChange={(event) => setTareaActual(event.target.value)} />
        <button onClick={agregarTarea}>CLICK</button>
      </fieldset>

      <section>
        {listadoTareas.map((tarea, id) => {
          return (<CartTask key={id} tarea={tarea} />)
        })}
      </section>
    </main>
  )
}

export default App
