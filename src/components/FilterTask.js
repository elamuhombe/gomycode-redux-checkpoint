// FilterTask.js
import React from 'react';
import { useDispatch } from 'react-redux';
import '../styles.css';

// Action creator function to generate the filter task action
const filterTask = (filter) => ({
  type: 'FILTER_TASK',
  payload: filter,
});

// Functional component for task filtering
const FilterTask = () => {
  const dispatch = useDispatch(); // Initializing dispatch function for redux actions

  // Function to handle changes in the filter selection
  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    
    // Dispatching the filterTask action with the selected filter as payload
    dispatch(filterTask(selectedFilter));
  };

  return (
    <div className = 'filter-task'>
      {/* Label for the filter dropdown */}
      <label htmlFor="filter">Filter:</label>
      
      {/* Dropdown menu for selecting the filter */}
      <select id="filter" onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="notDone">Not Done</option>
      </select>
    </div>
  );
};

export default FilterTask;
