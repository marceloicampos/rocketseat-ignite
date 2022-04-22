// const repositoryName = 'Nome Repositório'
// <strong>{repositoryName}</strong>

export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name ?? 'Default'}</strong>
            <p>{props.repository.description ?? 'Default'}</p>
            <a href={props.repository.html_url ?? 'Default'} target="_blank">
                {props.repository.full_name ?? 'Default'}
            </a>
        </li>
    )
}
