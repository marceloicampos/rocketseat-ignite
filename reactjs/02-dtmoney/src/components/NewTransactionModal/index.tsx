import { ContainerModal } from "./styles";
import Modal from 'react-modal'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <ContainerModal>
        <h2>Cadastrar Transação</h2>
      </ContainerModal>
    </Modal>
  )
}