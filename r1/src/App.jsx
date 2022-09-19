import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';

function App() {

    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(c => c + 1);
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter2(c => c >= 10 ? 0 : c + 2);
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);


    
           
    return (
        <div className="App">
            <header className="App-header">
            <h2>{counter}</h2>
            <h2>{counter2}</h2>
            </header>
        </div>
    );
}

export default App;