// const repositoryName = 'Nome Repositório'
// <strong>{repositoryName}</strong>
// Nota: a string 'Nome Repositório' será inserida dentro da tag strong por interpolação { } da const repositoryName

interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
        full_name: string;
    }
}

// nota: só precisamos TIPAR as informações que vamos usar na aplicação

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

// {props.repository.name ?? 'Default'} assim informamos: use as propriedades do repository senão tiver use Default, ou seja, se vazio use o que estiver nas aspas
// ou
// {props.repository || 'Default'} assim informamos: use as propriedades do repository ou use Default, ou seja, se vazio use o que estiver nas aspas
// NOTA: nullify collection operation javascript OU Operador de coalescência nula É o operador ? é um operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.
