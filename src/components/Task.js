// Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import EditTask from './EditTask'; 

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleTask = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const handleStartEditing = () => {
    setIsEditing(true);
  };

  const handleCancelEditing = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleTask}
      />
      {isEditing ? (
        <EditTask task={task} onCancel={handleCancelEditing} />
      ) : (
        <span
          style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
          onClick={handleStartEditing}
        >
          {task.description}
        </span>
      )}
    </div>
  );
};

export default Task;
