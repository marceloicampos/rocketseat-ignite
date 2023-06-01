import { TransactionsContext } from "../../TransactionsContext"
import { useContext } from "react";
import { ContainerTransactionsTable } from "./styles";

export function TransactionsTable() {

  const { transactions } = useContext(TransactionsContext)
  // console.log(transactions)

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
