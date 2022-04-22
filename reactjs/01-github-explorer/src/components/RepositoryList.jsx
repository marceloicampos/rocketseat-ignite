import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.scss'
import { useState, useEffect } from 'react'

// const repository = {
//     name: 'repo name',
//     description: 'repo description',
//     link: 'https://github.com',
//     link_name: 'repo link'
// }

export function RepositoryList() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/marceloicampos/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])
    // console.log(repositories)
    // o useEffect recebe dois params: qual função vamos executar e quando vamos executar a função
    return (
        <section className="repository-list">
            <h1>Git Hub - marceloicampos</h1>
            <a href="https://github.com/marceloicampos" target="_blank">
                <img src="https://avatars.githubusercontent.com/u/71357926?v=4" alt="foto avatar git hub marcelo campos" />
            </a>
            <h1>Lista de Repositórios - marceloicampos</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}

                {/* {repositories.map(repository => (<RepositoryItem repository={repository} />))} */}

                {/* {repositories.map(repository => <RepositoryItem repository={repository} />)} */}
            </ul>
        </section>
    )
}
