import logoSvg from '../../assets/logo.svg'
import { ContainerHeader, ContentHeaderDiv } from './styles'

export function Header() {
  return (
    <ContainerHeader>
      <ContentHeaderDiv>
        <img src={logoSvg} alt="logo dtMoney" />
        <button type="button">
          Nova Transação
        </button>
      </ContentHeaderDiv>
    </ContainerHeader>
  )
}
