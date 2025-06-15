import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // This will correctly load App.jsx
import './index.css'; // Optional: if you have Tailwind or global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
