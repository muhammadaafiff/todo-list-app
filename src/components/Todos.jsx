import React, { useState } from 'react'


const Todos = () => {
  const [todo, setTodo] = useState("")

  const handleChange = (event) => {
    setTodo(event.target.value)
  }
    
  console.log(todo)
  return (
    <div className='addTodos'>
        <input type="text" className='todo-input' onChange={ (event) => handleChange(event)}></input>
        <button className='add-btn'>Add</button>

    </div>
  )
}

export default Todos