import { useState } from 'react';
import './App.scss';
import T11 from './Components/015/T11';
import T12 from './Components/015/T12';
import T21 from './Components/015/T21';
import T22 from './Components/015/T22';
function App() {

    const [add19, setAdd19] = useState(0);
    const [showSq, setShowSq] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
            <h1>Total Recall 2</h1>
            <T11 setAdd19={setAdd19}></T11>
            <T12 add19={add19}></T12>
            <T21 setShowSq={setShowSq}></T21>
            <T22 showSq={showSq}></T22>
            </header>
        </div>
    );
}

export default App;