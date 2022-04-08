# rocketseat-ignite-reactjs-modules

01-github-explorer em 06/04/2022

--------------------------------------------------------------
webpack.config.js --------------------------------------------------------

const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}


babel.config,js --------------------------------------------------------

module.exports = {
    presets: [
        '@babel/preset-env',
        [
            '@babel/preset-react',
            {
                runtime: 'automatic'
            }
        ]
    ]
}

index.html ------------------------------------------------------------

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GitHub Explorer</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="../dist/bundle.js"></script>
    </body>
</html>

App.jsx ---------------------------------------------------------------

export function App() {
    return <h1>Hello World !</h1>
}


index.jsx --------------------------------------------------------------

// import React from 'react'
// import { render } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { App } from './App'

createRoot(document.getElementById('root')).render(<App tab="home" />)

// render(<App />, document.getElementById('root'))

// render(<h1>Test</h1>, document.getElementById('root'))

// function App() {
//     return <h1> Hello World</h1>
// }

// const user = {
//   name: 'Marcelo'
// }
// console.log(user.address?.street);
