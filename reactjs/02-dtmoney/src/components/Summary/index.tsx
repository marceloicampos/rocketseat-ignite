import { TransactionsContext } from '../../TransactionsContext'
import { useContext } from 'react'
import { ContainerSummary } from "./styles"
import incomeSvg from '../../assets/income.svg'
import outcomeSvg from '../../assets/outcome.svg'
import totalSvg from '../../assets/total.svg'

export function Summary() {

  const { transactions } = useContext(TransactionsContext)
  // console.log(transactions)

  // const totalDeposit = transactions.reduce((acc, transactions) => {
  //   if (transactions.type === 'deposit') {
  //     return acc + transactions.amount
  //   }
  //   return acc
  // }, 0)

  // const totalWithDraw = transactions.reduce((acc, transactions) => {
  //   if (transactions.type === 'withdraw') {
  //     return acc + transactions.amount
  //   }
  //   return acc
  // }, 0)

  // const total = totalDeposit - totalWithDraw

  const summary = transactions.reduce((acc, transactions) => {

    if (transactions.type === 'deposit') {
      acc.deposits += transactions.amount
      acc.total += transactions.amount
    } else {
      acc.withdraws += transactions.amount
      acc.total -= transactions.amount
    }
    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <ContainerSummary>

      {/* <TransactionsContext.Consumer>
        {(data) => {
          console.log(data);
          return (
            <h1>
            </h1>
          )
        }}
      </TransactionsContext.Consumer> */}

      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSvg} alt="ícone de entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saída</p>
          <img src={outcomeSvg} alt="ícone de saídas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalSvg} alt="ícone de total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </ContainerSummary>
  )
}
