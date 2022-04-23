import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

// import { StyledApp } from './StyledApp';
// Componente StyledApp dentro do render

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
