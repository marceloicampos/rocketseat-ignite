import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs'
import { App } from './App';

// import { StyledApp } from './StyledApp';
// para fins de testes, se quiser, pode inserir o componente StyledApp dentro do root.render

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id:1,
          title: 'Fix Site',
          amount: 400,
          type: 'deposit',
          category: 'Work',
          createdDate: new Date()
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
