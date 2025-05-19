
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [todo,setTodo] = useState([]);
  const [task,setTask] = useState('');
  function handleSubmit(e){
    e.preventDefault();
    setTodo([...todo,task]);
    setTask('');
  }

  function handleClick(id){
    const updatedTodo = todo.filter((item)=>item != todo[id])
    setTodo(updatedTodo);
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
          <br/>
          <button type="submit">Add Todo</button>
        </form>
        <div>
          {todo.map((item,index)=>(
            <p key={index}>{item}<span><button onClick={()=>handleClick(index)}>Delete</button></span></p>
          ))}
        </div>
    </div>
  )
}

export default App
