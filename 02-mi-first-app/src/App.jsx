import "./app.css"
import { useState } from "react"

const MOCK_TAREAS = ["pasear al perro","regar las plantas","entrenar","leer 20 páginas"]

function App() {

  const [listadoTareas, setListadoTareas] = useState(MOCK_TAREAS)


  return (
    <main>
      <h1>😎TODO LIST😎</h1>
      <h2>CON REACT + VITE</h2>

      <fieldset className="todo">
        <input type="text" />
        <button>CLICK</button>
      </fieldset>

      <section>
        {listadoTareas.map((tarea, id) => {
          return (
          <fieldset key={id}>
            <p>{tarea}</p>
            <div>
              <button>✅</button>
              <button>⛔</button>
            </div>
          </fieldset>)
        })}
      </section>
    </main>
  )
}

export default App
