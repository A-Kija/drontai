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
  const [createData, setCreateData] = useState(null);


  //READ
  useEffect(() => {
    setThings(read(key));
  }, []);

  //CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(key, createData);

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