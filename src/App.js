// Importing React
import React from 'react';

// Importing components
import AddTask from './components/AddTask';
import FilterTask from './components/FilterTask';
import ListTask from './components/ListTask';

// Functional component for the main application
const App = () => {
  return (
    <div className='task-container'>
      {/* Application title */}
      <h1 className='todo-title'>Todo List Application</h1>
      
      {/* AddTask component for adding new tasks */}
      <AddTask />
      
      {/* FilterTask component for filtering tasks */}
      <FilterTask />
      
      {/* ListTask component for displaying the list of tasks */}
      <ListTask />
    </div>
  );
};

export default App;
