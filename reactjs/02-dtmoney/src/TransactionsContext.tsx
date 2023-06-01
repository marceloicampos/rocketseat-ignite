import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from './services/api'

interface Transaction {
  id: number
  title: string
  type: string
  category: string
  amount: number
  createdAt: string
}

// interface TransactionInput {
//   title: string
//   type: string
//   category: string
//   amount: number
// }

// type TransactionInput = Pick<Transaction, 'title' | 'type' | 'category' | 'amount'>

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => void
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
    // .then(response => console.log(response.data))
    // fetch('http://localhost:3000/api/transactions')
    // .then(response => response.json())
    // .then(data => console.log(data))
    // normalmente fazemos o fetch acima para capturar os dados da API, mas no caso estamos usando o axios como um capturador
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
