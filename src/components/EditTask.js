// EditTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const EditTask = ({ task, onCancel }) => {
  const dispatch = useDispatch();
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSaveChanges = () => {
    if (editedDescription.trim() !== '') {
      dispatch({
        type: 'EDIT_TASK',
        payload: { id: task.id, description: editedDescription },
      });

      // You can also add additional logic or callbacks here, if needed

     
    }
  };

  return (
    <div>
      <input
        type="text"
        value={editedDescription}
        onChange={(e) => {
          console.log(e.target.value); // Log the value to the console
          setEditedDescription(e.target.value);
        }}
        placeholder="Enter updated task description"
      />
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
      }  

export default EditTask;
