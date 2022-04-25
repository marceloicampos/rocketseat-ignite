import incomeSvg from '../../assets/income.svg'
import outcomeSvg from '../../assets/outcome.svg'
import totalSvg from '../../assets/total.svg'

import { ContainerSummary } from "./styles";

export function Summary() {
  return (
    <ContainerSummary>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSvg} alt="ícone de entradas" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saída</p>
          <img src={outcomeSvg} alt="ícone de saídas" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalSvg} alt="ícone de total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </ContainerSummary>
  )
}
