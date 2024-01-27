// FilterTask.js
import React from 'react';
import { useDispatch } from 'react-redux';

const filterTask = (filter) => ({
  type: 'FILTER_TASK',
  payload: filter,
});

const FilterTask = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    dispatch(filterTask(selectedFilter));
  };

  return (
    <div>
      <label htmlFor="filter">Filter:</label>
      <select id="filter" onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="notDone">Not Done</option>
      </select>
    </div>
  );
};

export default FilterTask;
