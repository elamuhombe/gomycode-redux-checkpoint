
import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const App = () => {
  return (
    <div>
      <h1>Todo Application</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
