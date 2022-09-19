import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';

function App() {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(c => c + 1);
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);


    
           
    return (
        <div className="App">
            <header className="App-header">
            <h2>{counter}</h2>
            </header>
        </div>
    );
}

export default App;