import { useState } from 'react'
// useState é um hook

export function Counter() {
    const [counter, setCounter] = useState(0)
    // let counter = 0
    function Increment() {
        setCounter(counter + 1)
        // counter += 1
        // counter ++
        // counter = counter + 1
        // console.log('increment');
    }
    function Reset() {
        setCounter(0)
    }
    return (
        <div>
            <h2>Clique abaixo para Incrementar o Contador {counter}</h2>
            <button type="button" onClick={Increment}>
                Increment + 1
            </button>
            <h2>ou Clique abaixo para Zera o Contador</h2>
            <button type="button" onClick={Reset}>
                Reset
            </button>
        </div>
    )
}
