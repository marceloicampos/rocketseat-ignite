# rocketseat-ignite-reactjs-modules

01-github-explorer em 06/04/2022 - FIM 22/04/2022

# Project REACT JS - GIT HUB EXPLORER

Após as primeiras configurações, indicadas nas explicações abaixo, simplesmente use:

```sh
yarn dev
```

-   para ambiente de desenvolvimento - nota: ctrl + c - duas vezes interrompe o ambiente de desenvolvimento

```sh
yarn build
```

-   para ambiente de produção

NOTA: as instruções abaixo se aplicam aos ambientes GNU/Linux ou Windows 10 ou 11 com WSL 1 ou 2, DÊ PREFERÊNCIA PARA ESSES AMBIENTES, se usar MACOS ou WINDOWS PURO dá um google para desenvolver o projeto. Valeu

NOTA: alguns trechos estão em inglês, então use o Google Tradutor ou simplesmente vá treinando seu inglês, pois sabemos que entender, ler e falar em inglês é muito importante para a programação.

## LET´S GO

-   > BEFORE ANYTHING INSTALL: nodejs, npm and yarn (below are my atual versions, but can be different for your project)
-   > NODE VERSION 16.14.2
-   > NPM VERSION 8.5.0
-   > YARN VERSION 1.22.18
-   > note: all versions are LTS
-   > yarn outdated - view dependencies that are out of date
-   > yarn upgrade - the last command to update all dependencies
-   > note: set git init and a create a gitignore file for nodejs

NOTA: sei que pode ser uma tarefa complicada fazer as instalações acima, mas é o básico do básico saber fazê-las e trabalhar com o básico do GIT, bons estudos.

## Initial Installations

- create the project folder and init a react project and create package.json just use

```sh
yarn init -y or npm init -y
```

- install the dependencies

```sh
yarn add react or npm install react
```

```sh
yarn add react-dom or npm install react-dom
```

NOTA IMPORTANTE: vou utilizar o YARN no projeto, mas podemos usar também o npm, basta adaptar os comandos.

Nota: react dom é a árvores de elementos da aplicação ou a forma de se trabalhar com react na web ou um html convertido numa sintaxe de objetos javascript, permitindo assim que o react converse com o html e se precisar podemos instalar ainda a dependência react-native para trabalhar com mobile, mas o react-dom é para trabalhar com aplicações na web, então usaremos somente o react-dom inicialmente.

- create application folders src and public

src é pasta principal onde ficam todos os códigos criados na aplicação (principalmente os arquivos JS)

public é pasta onde ficam assets (complementos de conteúdos de websites) e arquivos públicos (como index.html, favicon.ico, robot.txt e outros)

- create basic files index.js and index.html

On public folder create a simple index.html with simple structure on index.js create a simple script

## Install Babel

-   > babeljs.io

babel is a JS Compiler

```sh
yarn add @babel/core @babel/cli @babel/preset-env -D
```

Nota: -D são dependências de desenvolvimento, ou seja, essas bibliotecas marcadas com -D significam que eles não irão para o on-line ou projetos em produção.

Basicamente o babel converte o código JS da aplicação de uma maneira que quase todos os browsers possam compreender os códigos javascript sejam comandos/estruturas novas ou antigas que ainda não são reconhecidas por alguns navegadores, ou seja, o babel re codifica o JS para que os navegadores entendam de qualquer forma.

- Create a file babel.config.js and inside the file just export the basic preset (just look the file babel.config.js).

@babel/core é basicamente a biblioteca principal do babel.

@babel/cli é basicamente a possibilidade de executar o babel pela linha de comando.

@babel/preset-env é um preset que identifica qual o ambiente que a aplicação está sendo executada para converter o código da melhor maneira possível.

```sh
yarn babel -h
```

Este é o comando de help do babel

- create the first index.js and use babel

Teste de instalação do babel e webpack (instalamos o webpack depois, mas sempre voltamos para fazer testes, pois as duas ferramentas trabalham juntas).

Para o PRIMEIRO teste INICIAL do babel use o código abaixo dentro do index.js e desconsidere os imports e os render (somente para testes iniciais, depois retorne com os imports e renders),

- código do primeiro teste

```sh
const user ={
name: 'marceloicampos',
}
console.log(user.address?.street)
```

In the folder src create the index.js and write some code like example above and try to convert the code using the babel, to convert index.js by babel on a dist/bundle.js use

```sh
yarn babel src/index.js --out-file dist/bundle.js
or
yarn babel src/index.js -o dist/bundle.js
```

No SEGUNDO teste de integração babel/webpack/react ignore o código/texto anterior e utilize os imports, claro que deveremos (no segundo teste) criar o arquivo App.jsx para injetar a uma função de exemplo e se tudo der certo (tanto no primeiro como segundo teste) o babel e webpack devem criar arquivos de bundle.js com as re codificações e empacotamentos.

 - código index.js do segundo teste

```sh
import React from 'react';

function App() {
return <h1>Hello World</h1>
}
```

- código App.js do segundo teste

```sh
export function App() {
        return <h1>Hello World New App on ReactJS !!!</h1>
}
```

O código acima é uma das formas de se trabalhar com React e para que o babel entenda o React devemos instalar preset abaixo

```sh
yarn add @babel/preset-react -D
```

- copy @babel/preset-react inside babel.config.js and run babel again

```sh
yarn babel src/index.js --out-file dist/bundle.js
or
yarn babel src/index.js -o dist/bundle.js
```

Finalmente transforme seus arquivos de .js em .jsx, pois essa é a nomenclatura que damos quando usamos html dentro do javascript, é opcional, foi algo introduzido pelo react, mas é uma boa prática de convenção quando usamos react.

Nota: nunca trabalhamos com os bundle.js, pois esses arquivos são só exemplos de conversão, assim primeiro trabalhamos com os index.js, depois convertermos os arquivos e após a conversão usamos os arquivos convertidos (sem realizar qualquer tipo de mudança no arquivos convertidos).

## Install WebPack

-   > webpack.js.org

WebPack is a static module bundler ou um empacotador de módulos estáticos em JavaScript, ou seja, o webpack combina cada módulo (separado ou não) do projeto em somente um ou poucos pacotes que serão ativos estáticos para servir toda a aplicação, não entendeu: pega todos os módulos/recursos da aplicação e junta num "saco só" para facilitar o projeto

Basicamente ele junta todos os módulos e recursos da aplicação (como sass, css, js, json, png e ou jpg) e utilizando loaders o webpack trata os módulos em static assets transformando em arquivos que são entendidos pelos navegadores

- install webpack

```sh
yarn add webpack webpack-cli webpack-dev-server -D
```

- create file webpack.config.js

dentro do webpack.config.js passe as instruções de como o webpack irá trabalhar com os arquivos/módulos/recursos da aplicação

nota: veja a arquivo de configuração para entender como damos as instruções ao webpack juntamente com o babel

lembre-se instalar, também, o babel loader:

```sh
yarn add babel-loader -D
```

e rode o:

```sh
yarn webpack
```

para executar/testar a ferramenta webpack/babel

## Create the React Structure

- Estrutura do React

O React cria toda a interface da aplicação através do javascript, ou seja, dentro do html não temos a estruturas de div, p, h1, menus, table e outras que normalmente usamos para construir um html, ao invés disso usamos o React com base no JS para construir toda essa estrutura

Dentro do HTML temos basicamente uma div (ou 1 elemento) com um id root e então toda a aplicação React é construída dentro de uma única div

Depois de alterar o index.html observe as alterações do index.jsx para construção da estrutura do React

Faça o import react-dom com a propriedade render do react

NOTA: lembre-se para trabalhar com web usamos o react-dom, então não se esquece de importar o react-dom com a propriedade render

NOTA: o render deve receber dois parâmetros: o que devemos exibir em tela e dentro de qual elemento devemos fazer a renderização

Nesse caso estamos querendo exibir um h1 dentro do elemento com id root

Execute novamente o yarn webpack

Nota: não precisamos realizar o import react para usar o react, então dentro do babel.config.js devemos passar uma configuração para o preset do react em forma de objeto dentro de um array, ou seja, devemos informar para o babel a configuração de runtime automatic e então mesmo sem o import do react, mas trabalhando com o react-dom podemos visualizar o public/index.html no browser

Agora ao invés de renderizar somente um h1 podemos renderizar o App.jsx através da função interna do App.jsx utilizando a estrutura do react <App />

IMPORTANTE: LEMBRE-SE que toda vez que mudamos o index.jsx devemos re codificar o bundle.js com yarn webpack

POR FIM: dentro do index.html importe por script o dist/bundle.js

```sh
<script src="../dist/bundle.js"></script>
```

NOTA: o yarn webpack pode rodar em dois modos o production e o development, por padrão sempre o webpack sempre roda em modo de produção, mas podemos configurar como padrão mode development dentro do arquivo webpack.config.js para podermos trabalhar no modo de desenvolvimento.

## Server Static html

Para que não fiquemos preocupados em sempre ter informar o arquivo bundle.js dentro o index.html podemos remover a tag script do html e instalar o html plugin para webpack

```sh
yarn add html-webpack-plugin -D
```

e dentro do webpack.config.js importamos o

```sh
const HtmlWebpackPlugin = require('html-webpack-plugin')
```

passando então a variável plugins para informar ao webpack a referida utilização do mesmo com algumas configurações básicas como o: template para o index.html, assim criamos um novo arquivos de saída no dist chamado também de dist/index.html, mas agora informando automaticamente o bundle.js

## WebPack Server

- install webpack dev server

```sh
yarn add webpack-dev-server -D
```

Basicamente usamos essa ferramenta para visualizar a aplicação a cada vez que atualizarmos os códigos/recursos da aplicação e assim não precisamos passar de tempos em tempos o yarn webpack, simplesmente o webpack-dev-server roda um servidor de desenvolvimento para acompanharmos o desenvolvimento da aplicação

Configure o webpack.config.js com os novos parâmetros para devServer e de acordo com a versão do seu webpack

agora então RODAMOS

```sh
yarn webpack serve
```

e podemos ter uma aplicação rodando em tempo real no nosso browser pela porta localhost 8080

## Sources Maps

É uma forma de visualizar o código original da aplicação mesmo quando houver re codificação pelo babel / webpack

No arquivo webpack.config.js insira as configurações para devtool conforme o código e versão do atual do webpack

Assim quando quisermos verificar um erro exato no dev tools do chrome haverá retorno exato do local e linha de erro, para tanto basta clicar no erro indicado no console e o mesmo irá mostrar nosso código de acordo com o que criamos e não de acordo com a re codificação do babel/webpack

NOTA: existem sources maps para development e outros para production verifique qual deveremos usar no momento

## Configurando ambientes

-   > De desenvolvimento

informamos ao webpack quando será desenvolvimento de acordo com código e as variáveis de ambientes do javascript pelo process env NODE_ENV production ou development

-   > De Produção

informamos ao webpack quando será produção de acordo com o código e as variáveis de ambientes do javascript pelo process env NODE_ENV production ou development

NOTA: para criar a variável NODE_ENV, que está indicada no isDevelopment no webpack.config.js, no UNIX basta executar

```sh
NODE_ENV=production yarn webpack
```

mas para sistema Windows ou outros precisamos instalar um dependência de cross env em que podemos criar variáveis de ambientes independente do SO que usamos

```sh
yarn add cross-env -D
```

no package json vamos criar scripts para ambientes de dev e de build de acordo com código

DETALHE IMPORTANTE: quando em production não haverá webpack serve, pois iremos criar uma "última/única" aplicação que entrará em produção.

NOTA: agora com os scripts temos

```sh
yarn dev - para development
```

```sh
yarn build - para production
```

## Import css

Create folder styles and create a file globals.css and create some code with css

Import inside App.jsx the styles css, just view the code

MAS não basta só importa o css para o jsx, pois não vai funcionar, pois no webpack.config.js temos que passar as rules de arquivos que serão tratados pelo webpack então veja o código para configurar as regras para arquivos css

NOTA: além das regras para css no webpack/babel devemos também instalar os loaders de css usando o comando

```sh
yarn add style-loader css-loader -D
```

execute yarn dev para ver o resultado

## Using SASS

- Install Sass

Com o Sass ou pré processador de CSS conseguimos mais funcionalidades no CSS como encadeamento e outras coisas a mais

```sh
yarn add node-sass -D
```

```sh
yarn add sass-loader -D
```

Notas: adicione o sass-loader no webpack.config.js

Notas: altere todas as referências de .css para .scss

execute yarn dev para ver o resultado

Nota: podemos preferir em só usar o Sass instalando - yarn add sass -D

Nota: podemos também usar o yarn add node-sass -D, mas devemos usar uma versão LTS do node para usar o NODE SASS e às vezes temos que instalar com NPM, ou seja, npm install node-sass --save-dev

Nota: o webPack recomenda somente o uso do sass, pois node-sass está ficando em desuso, mas os dois funcionam no projeto, lembrando que ou usamos o sass ou o node-sass

## Componentes no React

Componentes são forma de organizar a aplicação e dividir a aplicação, pois dentro do react tudo é componente, ou seja, componente é uma função/recurso da aplicação que são arquivos .jsx e de preferência começando com letra MAIÚSCULAS e essa função devolve um html. 

NOTA: 1 COMPONENTE POR ARQUIVO E SÓ, nunca mais de 1 componente por arquivo.

- Criando o primeiro componente

Crie uma pasta components dentro de src e dentro crie o arquivo RepositoryList então inicie o componente com

```sh
export function RepositoryList() {
        return (
                <tags html>content</tags html>
        )
}
```

e assim comece a desenvolver como descrito no código

## Propriedades no React

Funcionam como atributos no html, são informações variáveis para que um componente possa funcionar de forma diferente

- Criando o próximo componente com propriedades

Crie uma pasta components dentro de src e dentro crie o arquivo RepositoryItem então inicie o componente com

```sh
export function RepositoryItem() {
        return (
                <tags html> content </tags html>
        )
}
```

e assim comece a desenvolver como descrito no

## Estados do Componente

NOTA: sempre que existir um componente próximo ao outro sempre precisa existir um componente por volta deles, sempre levando a ideia de Pai e Filho, ou seja, no React sempre prevalece a ideia de Parent and Children, OU SEJA, se quisermos renderizar mais de um componente devemos envolver os componentes por algo seja uma div, um p ou que quer seja, assim a o "envolvente" será o PAI e o "os envolvidos" serão os filhos.

UMA DAS COISAS MAIS MALUCAS NO REACT SOBRE A NOTA ACIMA É QUE: não precisamos envolver com TAGS HTML podemos simplesmente envolver com uma tag vazia ou fragmento de tag ou simplesmente envolver com <> </> e o react faz o resto, assim não acrescentamos mais uma tag no html final e ficamos somente com as tags criadas nos nossos componentes.

ISSO É MUITO LOUCO: fragmento de tags <> </> para adicionar componentes filhos. BUM !!!

-   > IMPORTANTÍSSIMO

POR PADRÃO O REACT NÃO MONITORA AS VARIÁVEIS PARA EFETUAR RENDERIZAÇÃO DOS COMPONENTES, pois tal monitorização não é performática, pois muitas variáveis em tela deixam a aplicação lenta

NO CONCEITO DE ESTADO DOS COMPONENTES o React só renderiza as variáveis que mudam o estado, não uma monitorização TOTAL da aplicação, mas só daquelas partes que foram alteradas e toda fez que o conteúdo for alterado o react volta a exibir o conteúdo novamente, para usarmos tal funcionalidade importamos para dentro do componente o:

```sh
import { useState } from 'react'
```

Quando usamos o USE nas funções do React que começam com 'use' chamamos essas de hook ou ganchos

Esses Hooks retornam informações em formas de Array, então para 'pegar' essas informações usamos as ATRIBUIÇÕES VIA DESESTRUTURAÇÃO DE ARRAYS, onde a primeira parte da DESESTRUTURAÇÃO é a variável e a segunda parte é o set da variável ou simplesmente [variável, setVariável] e o set irá mudar o valor da variável

o useState retorna um par: o valor do state atual que é o primeiro array que é a variável e uma função que permite atualizá-lo que é o segundo array que é a setVariável.

Seguindo o conceito da imutabilidade no react o useState irá criar uma nova variável atualizando a nova variável de acordo com o set

## Imutabilidade no React

Conceito onde a variável nunca pode ter seu valor alterado, mas na verdade ela vai receber um novo valor, ou seja, não podemos alterar diretamente o valor da variável, mas podemos indicar um novo valor para a mesma

EXEMPLO:

```sh
users = ['marcelo', 'caio', 'eduarda']
users.push('fulano')
users = ['marcelo', 'caio', 'eduarda', 'fulano']
```

assim não alteramos a variável, mas indicamos um novo valor a variável

NO REACT HÁ ESTADO DE IMUTABILIDADE

ou seja, não damos push no array e SIM criamos um novo array

newUsers = [...users, 'fulano'] - utilizando o spread operator criamos um novo espaço na memória de variáveis e assim não alteramos o espaço já criado na memória ANTERIORMENTE, ou seja, o users = ['marcelo', 'caio', 'eduarda'] continuará assim e então criamos a nova variável newUsers = [...users, 'fulano'] que recebe os users + fulano

## Fast and Refresh no React

Com Fast and Refresh realizamos as mudanças em tela de acordo com o que foi alterado no código fonte, mas SEM ALTERAR O ESTADO ATUAL DA APLICAÇÃO/COMPONENTES para tanto vamos utilizar a ferramenta FAST AND REFRESH, veja o github oficial para instalação

```sh
https://github.com/pmmmwh/react-refresh-webpack-plugin
```

install fast and refresh

```sh
yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh
```

add on webpack.config.js

```sh
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

devServer: {hot: true,},

plugins: [isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),

use: {
	loader: 'babel-loader',
	options: {
		plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
			},
		},
```

Assim agora podemos alterar o código fonte e o ambiente de desenvolvimento não altera o estado da aplicação.

## useEffect

É outro hook do React onde você diz ao React que o componente precisa fazer algo apenas depois da renderização. O React ira se lembrar da função que você passou (nos referiremos a ele como nosso “efeito”), e assim chamamos o useEffect depois que realizar as atualizações do DOM.

Geralmente fazemos isso para chamadas de API que demoram a responder, assim fazemos o render do layout e depois informamos que o componente precisa renderizar algo após a renderização do layout, ou seja, podemos disparar um função somente quando algo acontecer na aplicação.

## Listando os repositories do Git Hub

PUBLIC API DO GITHUB - users and repos

```sh
https://api.github.com/users/marceloicampos

https://api.github.com/users/marceloicampos/repos
```

veja o código para ver como listamos os meus repositórios

## Usando Typescript

É um superset ou um conjunto de funcionalidades que adicionamos em cima de linguagem, ou seja, com o TS podemos "TIPAR" as informações ou formato dos argumentos das informações das funções do nosso projeto

```sh
type User = {
        name: string
        email: string
        phone: number
        address: {
                city: string
                state?: string
        }
}

function showWelcomeMessage(user: User){
        return `Welcome ${user.name}, your e-mail is ${user.email}, your address is ${user.city}`
}

const user = {
  name: 'marcelo',
  email: 'celo@world.com',
  phone: 859797979
}

console.log(user.phone)
```

Nota: o ? indica que state é uma informação não obrigatória
Nota: o parâmetro recebe :User para indicar que vamos usar linguagem tipada
- > Nota: user.city irá gerar um erro, pois pelo TS devemos passar pelo address para acessar o city ou o state, ou seja, user.address.city

- > Nota: NÃO precisamos "TIPAR" todas as variáveis da aplicação, pois TS tem uma ferramenta chamada inferências de tipos, onde ele consegue ver qual o tipo das variáveis nas maiorias dos casos

## Typescript on React

- Install TypeScript

```sh
yarn add typescript -D
```

```sh
yarn tsc --init
```

configure o tsconfig.json de acordo com o projeto

```sh
yarn add @babel/preset-typescript -D
```

e acrescente o @babel/preset-typescript ao babel.config.js
e dentro do webpack mude as rules de regex para aceitar tanto jsx com tsx e extensions aceitar a extensão ts e tsx
e dentro do webpack alterar o entry do index.jsx para index.tsx

instalar o types for react

```sh
yarn add @types/react @types/react-dom -D
```

Após todas as configurações transforme arquivos .jsx em .tsx

- > Nota: só precisamos TIPAR as informações que vamos usar na aplicação, se adicionarmos mais informações fazemos outros tipos
