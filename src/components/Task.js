// Task.js
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);
  const descriptionRef = useRef(null);

  useEffect(() => {
    return () => {
      // Cleanup if needed
    };
  }, []);

  const handleToggleTask = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const handleStartEditing = () => {
    setIsEditing(true);
    setUpdatedDescription(task.description);
  };

  const handleSaveChanges = () => {
    dispatch({
      type: 'EDIT_TASK',
      payload: { id: task.id, description: updatedDescription },
    });
    setIsEditing(false);
  };

  const handleDescriptionChange = () => {
    if (descriptionRef.current) {
      setUpdatedDescription(descriptionRef.current.innerHTML);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleTask}
      />
      <div
        contentEditable={isEditing}
        style={{
          textDecoration: task.isDone ? 'line-through' : 'none',
          border: isEditing ? '1px solid black' : 'none',
          padding: isEditing ? '2px' : '0',
          display: 'inline-block',
        }}
        ref={descriptionRef}
        onClick={handleStartEditing}
        onBlur={handleSaveChanges}
        onInput={handleDescriptionChange}
        dangerouslySetInnerHTML={{ __html: task.description }}
      />
      {!isEditing && <button onClick={handleStartEditing}>Edit</button>}
      {isEditing && <button onClick={handleSaveChanges}>Save Changes</button>}
    </div>
  );
};

export default Task;
