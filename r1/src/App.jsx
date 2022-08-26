import './App.scss';

function App() {

    const doJob = () => {
        console.log('Hello');
    }

    const clicked = () => {
        console.log('labas');
        doJob();
    }


    return (
        <div className="App">
            <header className="App-header">
            <h1>STATE</h1>
            <button onClick={clicked}>CLICK!</button>
            </header>
        </div>
    );
}

export default App;