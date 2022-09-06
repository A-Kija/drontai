import { useState } from 'react';
import './App.scss';

function App() {

    const [counts, setCounts] = useState({one: 0, two: 0});

    

    return (
        <div className="App">
            <header className="App-header">
                <h1>Local Store</h1>
                <h2>ONE: {counts.one}</h2>
                <h2>TWO: {counts.two}</h2>
                <button onClick={() => setCounts(c => ({...c, one: c.one + 1}))}>One +</button>
                <button onClick={() => setCounts(c => ({...c, two: c.two + 1}))}>Two +</button>
            </header>
        </div>
    );
}

export default App;