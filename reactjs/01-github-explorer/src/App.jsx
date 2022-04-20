import { Counter } from './components/Counter'
import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

export function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}

// export function App() {
//     return <h1>Hello World !!!</h1>
// }
