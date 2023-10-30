import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
 const [tasks, setTasks] = useState([]);
 const [taskDesc, setTaskDesc] = useState('');
 const [taskIndex, setTaskIndex] = useState(null);

 useEffect(() => {
    const tasks = [
      { id: 1, description: 'Task 1' },
      { id: 2, description: 'Task 2' },
      { id: 3, description: 'Task 3' },
    ];
    setTasks(tasks);
 }, []);

 const handleAddTask = () => {
    if (taskDesc.trim() === '') {
      alert('Task description cannot be empty');
      return;
    }
    const newTask = { id: Date.now(), description: taskDesc };
    setTasks([...tasks, newTask]);
    setTaskDesc('');
 };

 const handleEditTask = () => {
    const updatedTask = { ...tasks[taskIndex], description: taskDesc };
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex] = updatedTask;
    setTasks(updatedTasks);
    setTaskIndex(null);
    setTaskDesc('');
 };

 const handleDeleteTask = () => {
    const isConfirmed = confirm('Are you sure you want to delete this task?');
    if (isConfirmed) {
      const updatedTasks = tasks.filter((task, index) => index !== taskIndex);
      setTasks(updatedTasks);
      setTaskIndex(null);
      setTaskDesc('');
    }
 };

 return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className="task-form">
        <input
          type="text"
          placeholder="Task description"
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
        />
        <button onClick={taskIndex === null ? handleAddTask : handleEditTask}>
          {taskIndex === null ? 'Add Task' : 'Save'}
        </button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
 ? 'Add Task' : 'Save'}
        </button>
      </div          <div key={task.id} className="task">>
      <div className="task-list">
        {tasks
            {taskIndex === index ? (
              <input.map((task, index) => (
          <div key={
                type="text"
                value={taskDesc}
               task.id} className="task">
            {taskIndex === index ? ( onChange={(e) => setTaskDesc(e.target.
              <input
                type="text"
                value={taskDesc}value)}
              />
            ) : (
              <span>{task
                onChange={(e) => setTaskDesc(.description}</span>
            )}
            <button onClick={()e.target.value)}
              />
            ) : (
              <span>{ => setTaskIndex(index)}>Edit</button>
            <button onClicktask.description}</span>
            )}
            <button onClick={() =>={() => setTaskIndex(index)} setTaskIndex(index)}>Edit</>Delete</button>
          </button>
            <button onClick={() => setdiv>
        ))}
      </TaskIndex(index)}>Delete</button>div>
    </div>
 );
          </div>
        
}

export default App;
))}
      </div>
    </div```

This code provides a basic implementation>
 );
}

export default App of the task management application as described in the requirements. The;