import TodoItem from './TodoItem';

function TodoList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} >
          <button onClick={()=> deleteTask(index)}>Eliminar</button>
        </TodoItem>
      ))}
    </ul>
  );
}

export default TodoList;