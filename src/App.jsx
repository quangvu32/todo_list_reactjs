import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const addTask = () => {
    if(newTask.trim() !== ''){
      setTasks([...tasks, newTask])
      setNewTask('')
    }
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index)
    setTasks(updatedTasks)
  }

  return (
    <>
      <div className='container'>
        <h1>To-Do List</h1>
        <div className='input'>
          <input 
            className='input' 
            type='text' 
            placeholder='Add a new task' 
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
          />
          <button 
            className='button'
            onClick={() => addTask()}
          >
            Add
          </button>
        </div>
        <div className='task-container'>
            <ul className='taskList'>
            {
              tasks.map((task, index) => (
                <li key={index} className='task'>
                  <span>{task}</span>
                  <button 
                    className='button'
                    onClick={() => deleteTask(index)}
                  >
                  Delete
                </button>
                </li>
              ))
            }
            </ul>
          </div>
      </div>
    </>
  )
}

export default App
