import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import DataContext from './Components/DataContext.jsx';
import { create } from './Functions/localStorage';

const key = 'things_shelf';

function App() {


  const [createData, setCreateData] = useState(null);


  
  //CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(key, createData);

  }, [createData])

  return (
    <DataContext.Provider value={{
      setCreateData
    }}>
    <div className="container">
      <div className="bin">
        <div className="box-1">
          <Create />
        </div>
        <div className="box-2">
          2
        </div>
      </div>
    </div>
    </DataContext.Provider>
  );
}

export default App;