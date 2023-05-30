import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.scss'
import { useState, useEffect } from 'react'

interface Repository {
    name: string;
    description: string;
    html_url: string;
    full_name: string;
}

// nota: só precisamos TIPAR as informações que vamos usar na aplicação

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])

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
            <h1>Lista de Repositórios Reversa - marceloicampos</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                    // nota: devemos passar a propriedade key para que o react possa localizar individualmente cada propriedade
                }).sort().reverse()}

                {/* {repositories.map(repository => (<RepositoryItem repository={repository} />))} */}

                {/* {repositories.map(repository => <RepositoryItem repository={repository} />)} */}

                {/* os dois itens acima são outras formas de escrever a chamada */}
            </ul>
        </section>
    )
}

// para passar uma atribuição ao componente filho (no caso RepositoryItem) indicamos logo anexo a ele uma propriedade no caso passamos a propriedade repository="form nome alterado" agora podemos acessar essa informação do componente filho injetando na função filho um argumento chamado props e indicado onde a propriedade irá retornar com {props.repository} assim injetamos a propriedade do elemento onde quisermos

// <RepositoryItem
//      name="repo name"
//      description="repo description"
//      link="https://github.com"
//      link_name: "repo name link"
// />

// const repository = {
//     name: 'repo name',
//     description: 'repo description',
//     link: 'https://github.com',
//     link_name: 'repo name link'
// }

{/* <RepositoryItem repository={repository} /> */}

// MAS ao INVÉS DE PASSAR SIMPLES TEXTO PODEMOS PASSAR OBJETOS USANDO AS CHAVES {} na linguagem javascript criar um variável e colocar todas as informações dentro de um único objeto
