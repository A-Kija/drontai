import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import DataContext from './Components/DataContext.jsx';
import List from './Components/List';
import { create, read } from './Functions/localStorage';

const key = 'things_shelf';

function App() {


  const [things, setThings] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);


  //READ
  useEffect(() => {
    setThings(read(key));
  }, [lastUpdate]);

  //CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(key, createData);
    setLastUpdate(Date.now());

  }, [createData])

  return (
    <DataContext.Provider value={{
      setCreateData,
      things
    }}>
    <div className="container">
      <div className="bin">
        <div className="box-1">
          <Create />
        </div>
        <div className="box-2">
          <List />
        </div>
      </div>
    </div>
    </DataContext.Provider>
  );
}

export default App;