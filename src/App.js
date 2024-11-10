import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store tasks
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  // Add a new task
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput(""); // Clear the input after adding
    }
  };

  // Remove a task
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      
      <input 
        type="text" 
        value={taskInput} 
        onChange={handleInputChange} 
        placeholder="Enter a new task" 
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
