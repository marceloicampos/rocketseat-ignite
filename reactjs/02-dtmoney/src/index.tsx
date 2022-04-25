import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

// import { StyledApp } from './StyledApp';
// para fins de testes, se quiser, pode inserir o componente StyledApp dentro do root.render

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
