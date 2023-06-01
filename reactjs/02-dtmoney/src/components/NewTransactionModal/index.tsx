import { TransactionsContext } from '../../TransactionsContext'
import { FormEvent, useState, useContext } from 'react'
import { ContainerFormModal, TransactionTypeContainer, RadioBox } from "./styles"
import closeSvg from '../../assets/close.svg'
import logoInSvg from '../../assets/income.svg'
import logoOutSvg from '../../assets/outcome.svg'
import Modal from 'react-modal'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const { createTransaction } = useContext(TransactionsContext)

  const [type, setType] = useState('')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    // acima estamos prevenindo a ação padrão do html atrás da também da tipagem padrão do react pelo FormEvent
    // const data = { type, title, value, category }
    // api.post('/transactions', data)

    createTransaction({
      type, title, amount, category
    })

    setType('')
    setTitle('')
    setAmount(0)
    setCategory('')
  }

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
      <ContainerFormModal onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          step='0.01'
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

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

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </ContainerFormModal>
    </Modal>
  )
}