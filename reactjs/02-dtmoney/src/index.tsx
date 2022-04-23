import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { StyledApp } from './StyledApp';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
      <App />
      <StyledApp />
  </React.StrictMode>
);
