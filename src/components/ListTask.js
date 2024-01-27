// ListTask.js
import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  // Using useSelector to get tasks and filter from the Redux store
  const tasks = useSelector((state) => {
    if (state.filter === 'done') {
      return state.tasks.filter((task) => task.isDone);
    } else if (state.filter === 'notDone') {
      return state.tasks.filter((task) => !task.isDone);
    } else {
      return state.tasks; // 'all' filter, display all tasks
    }
  });

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListTask;
