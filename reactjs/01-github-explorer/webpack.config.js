const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        hot: true
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean)
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}

// entry é a entrada do arquivo/recurso a ser trabalhado pelo webpack

// output é a saída do arquivo/recurso a ser trabalhado pelo webpack

// resolve extensions permite que o webpack leia arquivos .js e .jsx ou outras desejadas

// module é onde ficam as configs de como a aplicação se comporta quando estivermos trabalhando com arquivos especificados definindo assim regras ou rules para cada arquivo e módulos da aplicação, então os .jsx usam 'babel-loader' e os arquivos usam 'style-loader', 'css-loader', 'sass-loader' (lembrando que devemos instalar cada loader que será usado na regra)

// /\.jsx$/ é expressão regular ou regex para verificar se o arquivo termina com .jsx, assim o test verifica se o arquivo tal qual está na regex é um arquivo javascript a mesma ação para (por exemplo) /\.scss$/

// exclude serve para excluir a verificação da pasta node node_modules

// use informa a que o webpack deve usar a integração com webpack

// lembre-se instalar, também, o 'babel loader':

// yarn add babel-loader -D

// lembre-se instalar, também, o 'style-loader', 'css-loader', 'sass-loader':

// yarn add style-loader css-loader -D, yarn add sass -D, yarn add sass-loader -D

// babel-loader é uma dependência do Babel para carregar e integrar o Babel ao Webpack, onde o webpack trabalha na importação e empacotamento do JSX e o babel trabalha na conversão e compilação do JSX de uma maneira que os navegadores entendam, assim podemos tanto empacotar diversos recursos num só lugar com o webpack como também re codificar o JavaScript com o Babel de maneira que vários navegadores entenda o JS, ou seja, podemos usar novos recursos do JS que os navegadores ainda não suportam, mas como estão re codificados de forma que qualquer navegador entenda o JS usando o Babel e empacotados de forma unificada usando o webpack não haverá problemas na construção da aplicação

// e rode o:

// yarn webpack

// para executar/testar a ferramenta webpack/babel

// plugins HtmlWebpackPlugin injeta o arquivo javascript dentro do html, sem a necessidade de ficar estabelecendo o nome do bundle.js, simplesmente esse plugin injeta forçado a re codificação final do babel / webpack dentro do nosso código final html, assim podemos retirar a tag script e o plugin irá injetar o javascript no html de qualquer forma

// devServer trabalha junto com o webpack server e simplesmente informamos o arquivo estático html que o webpack server irá automatizar o processo yarn webpack em yarn webpack serve paramos o serve com ctrl + c e então podemos acessar a aplicação no localhost na porta 8080

// devtool passamos os sources map da aplicação onde podemos visualizar código original da aplicação mesmo que esteja re codificado e empacotado pelo webpack / babel, ou seja, na config devtool informamos que tipo de source map devemos usar para development usamos eval-source-map para o production usamos somente o source-map

// mode para indicar os modos de trabalhar com o projeto, seja em mode de development seja em mode production
