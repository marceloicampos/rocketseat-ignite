import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

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
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

const TransactionsContext = createContext<TransactionContextData>(
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

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', { ...transactionInput, createdAt: new Date() })
    const { transaction } = response.data
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}
