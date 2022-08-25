import './App.css';

const cats = [
    {id: 1, weight: 5, name: 'Murka'},
    {id: 2, weight: 8, name: 'Pilkis'},
    {id: 3, weight: 2, name: 'Pūkis'},
    {id: 4, weight: 3, name: 'Rainis'},
    {id: 5, weight: 5, name: 'Brisius'}
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <h1>Lists</h1>
            <ul>
                {
                    [...cats].sort((a, b) => b.weight - a.weight).map((cat, i) => <li key={i}>{cat.name} <i>{cat.weight}kg</i></li>)
                }
            </ul>
      </header>
    </div>
  );
}

export default App;