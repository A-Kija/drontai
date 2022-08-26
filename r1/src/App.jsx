import { useState } from 'react';
import './App.scss';

function App() {


    const [color, setColor] = useState('crimson');
    const [size, setSize] = useState(30);
    const [count, setCount] = useState(1);

    /*
    const color <--- state (props) 
    const setColor <--- funkcija state keitimui
    */

    // const doJob = function() {
    //     console.log('Hello');
    // }

    const clicked = () => {
        setColor('skyblue');
    }

    const doSize = () => {
        setSize(40);
    }

    const doCount = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }


    return (
        <div className="App">
            <header className="App-header">
            <h1 style={{
                color: color,
                fontSize: size + 'px'
                }}>STATE {count}</h1>
            <button onClick={clicked}>CLICK!</button>
            <button onClick={doSize}>DO SIZE</button>
            <button onClick={doCount}>+1</button>
            </header>
        </div>
    );
}

export default App;