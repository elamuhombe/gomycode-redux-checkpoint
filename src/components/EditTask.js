// EditTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const EditTask = ({ task }) => {
  const dispatch = useDispatch();
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEditTask = () => {
    dispatch({ type: 'EDIT_TASK', payload: { id: task.id, description: editedDescription } });
  };

  return (
    <div>
      <input
        type="text"
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
      />
      <button onClick={handleEditTask}>Save Changes</button>
    </div>
  );
};

export default EditTask;
