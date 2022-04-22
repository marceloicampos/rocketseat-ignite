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
            <h2>Counter {counter}</h2>
            <h3>clique para Incrementar o Contador</h3>
            <button type="button" onClick={Increment}>
                Increment + 1
            </button>
            <h3>clique para Zerar o Contador</h3>
            <button type="button" onClick={Reset}>
                Reset
            </button>
        </div>
    )
}
