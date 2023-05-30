import React from 'react';
import ReactDOM from 'react-dom/client';
import { Model, createServer } from 'miragejs'
import { App } from './App';

// import { StyledApp } from './StyledApp';
// para fins de testes, se quiser, pode inserir o componente StyledApp dentro do root.render

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [{
        id: 1,
        title: 'Freelance de Website',
        type: 'deposit',
        category: 'Desenvolvimento',
        amount: 6000,
        createdAt: new Date("2021-02-28 09:00:00")
      },
      {
        id: 2,
        title: 'Aluguel',
        type: 'withdraw',
        category: 'Moradia',
        amount: 1500,
        createdAt: new Date("2021-03-05 10:00:00")
      }
      ]
    })
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

// estamos usando o mirageJS para criar uma fake API para servir dados básicos para a aplicação

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
