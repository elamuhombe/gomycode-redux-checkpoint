// ListTask.js
import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task'; // Importing the Task component
import '../styles.css'; // Importing external styles

// Functional component for rendering a list of tasks
const ListTask = () => {
  // Using the useSelector hook to access the Redux store state
  const tasks = useSelector((state) => {
    // Filtering tasks based on the current filter in the Redux store
    if (state.filter === 'done') {
      return state.tasks.filter((task) => task.isDone);
    } else if (state.filter === 'notDone') {
      return state.tasks.filter((task) => !task.isDone);
    } else {
      return state.tasks;
    }
  });

  return (
    <div class='task-list'>
      {/* Mapping through filtered tasks and rendering Task component for each */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
