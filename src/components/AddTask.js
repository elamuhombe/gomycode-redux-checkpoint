// AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Importing useDispatch hook from react-redux
import '../styles.css'; // Importing external styles

// Functional component for adding tasks
const AddTask = () => {
  const dispatch = useDispatch(); // Initializing dispatch function for redux actions
  const [description, setDescription] = useState(''); // State for managing task description input

  // Function to handle the addition of a new task
  const handleAddTask = () => {
    if (description.trim() !== '') { // Check if the task description is not empty
      const newTask = {
        id: Date.now(), // Using the current timestamp as a unique identifier
        description,
        isDone: false,
      };

      // Dispatching an action to add the new task to the Redux store
      dispatch({ type: 'ADD_TASK', payload: newTask });
      
      // Resetting the description state after adding the task
      setDescription('');
    }
  };

  return (
    <div className="add-task">
      {/* Input field for entering task description */}
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description"
      />
      
      {/* Button to trigger the task addition */}
      <button onClick={handleAddTask} className='btn-add-task'>Add Task</button>
    </div>
  );
};

export default AddTask;
