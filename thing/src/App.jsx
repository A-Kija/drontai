import './App.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import List from './Components/List';
import Create from './Components/Create';
import DataContext from './Components/DataContext';

const textures = [
  { id: 1, title: 'Wood' },
  { id: 2, title: 'Metal' },
  { id: 3, title: 'Paper' },
  { id: 4, title: 'Stone' }
]

function App() {

  const [things, setThings] = useState(null);
  const [createData, setCreateData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3003/api')
      .then(res => {
        setThings(res.data);
      });
  }, []);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    axios.post('http://localhost:3003/api', createData)
      .then(res => {

      })
  }, [createData]);



  return (
    <DataContext.Provider value={{
      things,
      textures,
      setCreateData
    }}>
      <div className="container">
        <div className="bin">
          <div className="box-1">
            <Create />
            {/* <Bin /> */}
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