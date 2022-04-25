import { useEffect } from "react";
import { api } from "../../services/api";
import { ContainerTransactionsTable } from "./styles";

export function TransactionsTable() {

  useEffect(() => {
    api.get('/transactions')
      .then(response => console.log(response.data))
    // fetch('http://localhost:3000/api/transactions')
    // .then(response => response.json())
    // .then(data => console.log(data))
    // normalmente fazemos o fetch acima, mas no caso estamos usando o axios
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
          <tr>
            <td>Criação de WebSite</td>
            <td className="deposit">R$ 1.000,00</td>
            <td>Desenvolvimento</td>
            <td>10/01/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 500,00</td>
            <td>Casa</td>
            <td>25/01/2021</td>
          </tr>
          <tr>
            <td>Atividade Exemplo Neutro</td>
            <td>R$ 0,00</td>
            <td>Descrição Exemplo Neutro</td>
            <td>00/00/2000</td>
          </tr>
        </tbody>
      </table>
    </ContainerTransactionsTable>
  )
}
