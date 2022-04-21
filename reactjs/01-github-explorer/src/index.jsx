// import React from 'react' - eliminamos essa importação com o react preset runtime automatic no babel
// import { render } from 'react-dom' - eliminamos essa importação com o novo modelo de criação de root descrito abaixo de acordo com react 18

import { createRoot } from 'react-dom/client'
import { App } from './App'

createRoot(document.getElementById('root')).render(<App tab="home" />)

// render(<App />, document.getElementById('root'))
// render(<h1>Test</h1>, document.getElementById('root'))
// - exemplos de render antigos, após o react 18 usamos agora o createRoot

// function App () {
//   return <h1>Hello App</h1>
// }
// - essa função foi deslocada para o App.jsx e importada como no import

// const user = {
//     name: 'Marcelo'
// }
// console.log(user.address?.street)
// - primeiro código utilizado para testar o babel
