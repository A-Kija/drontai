import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Dog from './Components/011/Dog';

function App() {

    const [dogs, setDogs] = useState([]);
    const [count, setCount] = useState(1);

    const add = () => {
        setDogs(d => [...d, d.length]);
    }

    const plus = () => {
        setCount(c => c + 1);
    }

    useEffect( () => {
        console.log('Dogs Changed Or Added 1');
        console.log('Count is:' + count);
        // setCount(c => c + 1);
    }, [dogs, count]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Use Effect {count}</h1>

                <div className="container">
                    {
                        dogs.map((n, i) => <Dog key={n} i={n}></Dog>)
                    }
                </div>

                <div className="container">
                    <button onClick={add}>Add Dog</button>
                    <button onClick={plus}>Plus</button>
                </div>


            </header>
        </div>
    );
}

export default App;