import React from 'react';
import ReactDOM from 'react-dom/client'; // Use react-dom/client in React 18
import App from './App'; // Import your App component
import './styles/index.css'; // Import global styles if you have any

// Get the root element where your app will be mounted
const rootElement = document.getElementById('root');

// Create a root for React 18
const root = ReactDOM.createRoot(rootElement);

// Render the App inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
