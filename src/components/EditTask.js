// EditTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Functional component for editing task descriptions
const EditTask = ({ task, onCancel }) => {
  const dispatch = useDispatch(); // Initializing dispatch function for redux actions
  const [editedDescription, setEditedDescription] = useState(task.description);

  // Function to handle saving changes to the task description
  const handleSaveChanges = () => {
    if (editedDescription.trim() !== '') { // Check if the edited description is not empty
      // Dispatching an action to edit the task description in the Redux store
      dispatch({
        type: 'EDIT_TASK',
        payload: { id: task.id, description: editedDescription },
      });
      
      // Invoking onCancel function passed as a prop to close the edit mode
      onCancel();
    }
  };

  return (
    <div>
      {/* Input field for entering the updated task description */}
      <input
        type="text"
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
        placeholder="Enter updated task description"
      />
      
      {/* Button to save changes */}
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
};

export default EditTask;
