import { useState } from "react";


function TodoItem({ task, children }) {
  const [isComplete, setIsComplete] = useState(false) 

  const styles = isComplete ? {textDecoration: "line-through"} : {}

  const toggleComplete = () =>{
    setIsComplete(!isComplete)
  }

  const textButton = isComplete ? "♻" : "✅"

  return (
    <li>
      <p style={styles}>{task}</p>
      <button onClick={() => toggleComplete()} >{textButton}</button>
      {children}
    </li>
  );
}

export default TodoItem;