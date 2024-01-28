// Importing the createStore function from Redux
import { createStore } from 'redux';

// Initial state for the Redux store
const initialState = {
  tasks: [],
  filter: 'all',
};

// Reducer function for managing state changes based on actions
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    // Action to add a new task to the tasks array
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    // Action to toggle the completion status of a task
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };

    // Action to edit the description of a task
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        ),
      };

    // Action to delete a task based on its ID
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    // Action to update the filter type for displaying tasks
    case 'FILTER_TASK':
      return {
        ...state,
        filter: action.payload,
      };

    // Default case returns the current state for unknown actions
    default:
      return state;
  }
};

// Creating the Redux store with the tasksReducer
const store = createStore(tasksReducer);

// Exporting the created store
export default store;
