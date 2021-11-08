import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContextTimeProvider from "./contexts/ContextTime"


ReactDOM.render(
  <React.StrictMode>
    <ContextTimeProvider>
    <App />
    </ContextTimeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
