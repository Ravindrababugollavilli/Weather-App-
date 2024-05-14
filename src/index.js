import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  rootElement
);
