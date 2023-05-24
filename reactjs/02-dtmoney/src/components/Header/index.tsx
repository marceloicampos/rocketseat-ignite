import logoSvg from '../../assets/logo.svg'
import { ContainerHeader, ContentHeaderDiv } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <ContainerHeader>
      <ContentHeaderDiv>
        <img src={logoSvg} alt="logo dtMoney" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </ContentHeaderDiv>
    </ContainerHeader>
  )
}
