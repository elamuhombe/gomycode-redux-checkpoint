// Task.js
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdEditSquare } from "react-icons/md"; // Importing the Edit icon
import { MdDelete } from "react-icons/md"; // Importing the Delete icon

// Functional component for rendering and managing individual tasks
const Task = ({ task }) => {
  const dispatch = useDispatch(); // Initializing dispatch function for redux actions
  const [isEditing, setIsEditing] = useState(false); // State for tracking whether the task is in edit mode
  const [updatedDescription, setUpdatedDescription] = useState(task.description); // State for tracking edited task description
  const descriptionRef = useRef(null); // Ref for accessing the contentEditable div

  useEffect(() => {
    // Cleanup if needed
    return () => {
      // Cleanup if needed
    };
  }, []);

  // Function to toggle the completion status of the task
  const handleToggleTask = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  // Function to start editing the task
  const handleStartEditing = () => {
    setIsEditing(true);
    setUpdatedDescription(task.description);
  };

  // Function to save changes made during editing
  const handleSaveChanges = () => {
    dispatch({
      type: 'EDIT_TASK',
      payload: { id: task.id, description: updatedDescription },
    });
    setIsEditing(false);
  };

  // Function to delete the task
  const handleDeleteTask = () => {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  };

  // Function to handle changes in the task description during editing
  const handleDescriptionChange = () => {
    if (descriptionRef.current) {
      setUpdatedDescription(descriptionRef.current.innerHTML);
    }
  };

  return (
    <div className='task-item'>
      {/* Checkbox for toggling completion status */}
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleTask}
      />
      
      {/* ContentEditable div for displaying and editing task description */}
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

      {/* Edit button (visible when not in edit mode) */}
      {!isEditing && <button onClick={handleStartEditing}><MdEditSquare /></button>}

      {/* Delete button (visible when not in edit mode) */}
      {!isEditing && <button onClick={handleDeleteTask}><MdDelete /></button>}

      {/* Save Changes button (visible when in edit mode) */}
      {isEditing && <button onClick={handleSaveChanges}>Save Changes</button>}
    </div>
  );
};

export default Task;
