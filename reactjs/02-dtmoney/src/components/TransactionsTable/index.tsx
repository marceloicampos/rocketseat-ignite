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
          {/* <tr>
            <td>title</td>
            <td className="deposit">R$ 0,00</td>
            <td>category / type deposit</td>
            <td>01/01/2001</td>
          </tr>
          <tr>
            <td>title</td>
            <td className="withdraw">R$ 0,00</td>
            <td>category / type withdraw</td>
            <td>02/02/2002</td>
          </tr> */}
        </tbody>
      </table>
    </ContainerTransactionsTable>
  )
}
