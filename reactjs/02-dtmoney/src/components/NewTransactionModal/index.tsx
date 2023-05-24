import closeSvg from '../../assets/close.svg'
import logoInSvg from '../../assets/income.svg'
import logoOutSvg from '../../assets/outcome.svg'
import { useState } from 'react';
import { ContainerFormModal, TransactionTypeContainer, RadioBox } from "./styles";
import Modal from 'react-modal'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const [type, setType] = useState('')

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    // modal tem estilo globa
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      // fechar modal tem estilo global
      >
        <img src={closeSvg} alt="botão de fechar o Modal" />
      </button>
      <ContainerFormModal>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={(() => setType('deposit'))}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={logoInSvg} alt="logo valor de entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type='button'
            onClick={(() => setType('withdraw'))}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={logoOutSvg} alt="logo valor de saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </ContainerFormModal>
    </Modal>
  )
}