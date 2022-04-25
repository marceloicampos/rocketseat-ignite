import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'
import { ContainerDashboard } from './styles'

// o Dashboard é um container / componente que engloba o Summary, TransactionsTable e outros futuros componentes que a aplicação possa conter.

export function Dashboard() {
  return (
    <ContainerDashboard>
      <Summary />
      <TransactionsTable />
    </ContainerDashboard>
  )
}
