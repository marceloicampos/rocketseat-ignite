import { RepositoryItem } from './RepositoryItem'

const repository = {
    name: 'repo name',
    description: 'repo description',
    link: 'https://github.com',
    link_name: 'repo link'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}
