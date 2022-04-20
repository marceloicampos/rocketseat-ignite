// const repositoryName = 'Nome Repositório'
// <strong>{repositoryName}</strong>

export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name ?? 'Default'}</strong>
            <p>{props.repository.description ?? 'Default'}</p>
            <a href={props.repository.link ?? 'Default'} target="_blank">
                {props.repository.link_name}
            </a>
        </li>
    )
}
