import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContainerTransactionsTable } from "./styles";

interface Transaction {
  id: number
  title: string
  type: string
  category: string
  amount: number
  createdAt: string
}

export function TransactionsTable() {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
    // .then(response => console.log(response.data))
    // fetch('http://localhost:3000/api/transactions')
    // .then(response => response.json())
    // .then(data => console.log(data))
    // normalmente fazemos o fetch acima para capturar os dados da API, mas no caso estamos usando o axios como um capturador
  }, []);

  return (
    <ContainerTransactionsTable>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR')
                    .format(new Date(transaction.createdAt))}</td>
              </tr>
            )
          })}
          <tr>
            <td>Criação de WebSite</td>
            <td className="deposit">R$ 1.000,00</td>
            <td>Desenvolvimento</td>
            <td>10/01/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$ 500,00</td>
            <td>Moradia</td>
            <td>25/01/2021</td>
          </tr>
        </tbody>
      </table>
    </ContainerTransactionsTable>
  )
}
