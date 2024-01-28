// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/Store';
import App from './App'; 

// Using createRoot to render the application into the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  // Providing the Redux store to the entire application using Provider
  <Provider store={store}>
    {/* Enabling React Strict Mode */}
    <React.StrictMode>
      {/* Rendering the main application component */}
      <App />
    </React.StrictMode>
  </Provider>,
);
