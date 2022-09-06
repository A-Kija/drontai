import { useState } from 'react';
import './App.scss';
import L1 from './Components/012/L1';

function App() {

    const [stars, setStars] = useState('');

    return (
        <div className="App">
            <header className="App-header">
                <h1>Context</h1>
                <L1 stars={stars} />
                <button onClick={() => setStars(s => s + '*')}>ADD *</button>
            </header>
        </div>
    );
}

export default App;