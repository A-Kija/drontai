import './App.scss';
import Text from './Components/010/Text';
import { useState } from 'react';

function App() {

    const [textNow, setTextNow] = useState('');

    return (
        <div className="App">
            <header className="App-header">
                <h1>State Uplifting</h1>
                <h2>TEXT: {textNow}</h2>
                <Text setTextNow={setTextNow} />
            </header>
        </div>
    );
}

export default App;