// const repositoryName = 'Nome Repositório'
// <strong>{repositoryName}</strong>

interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
        full_name: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
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
