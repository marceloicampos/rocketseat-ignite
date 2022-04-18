const repositoryName = 'Nome do Repositório'

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>repo description</p>
                    <a href="#">repo link</a>
                </li>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>repo description</p>
                    <a href="#">repo link</a>
                </li>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>repo description</p>
                    <a href="#">repo link</a>
                </li>
            </ul>
        </section>
    )
}
