// AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTask = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (description.trim() !== '') {
      const newTask = {
        id: Date.now(),
        description,
        isDone: false,
      };

      dispatch({ type: 'ADD_TASK', payload: newTask });
      setDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
