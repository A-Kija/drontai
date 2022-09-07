import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import DataContext from './Components/DataContext.jsx';
import Edit from './Components/Edit';
import List from './Components/List';
import { create, read, destroy, update } from './Functions/localStorage';

const key = 'things_shelf';

function App() {


  const [things, setThings] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);


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
  }, [createData]);

  //DELETE
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    destroy(key, deleteData.id);
    setLastUpdate(Date.now());
  }, [deleteData]);

    //EDIT
    useEffect(() => {
      if (null === editData) {
        return;
      }
      update(key, editData, editData.id);
      setLastUpdate(Date.now());
    }, [editData]);

  return (
    <DataContext.Provider value={{
      setCreateData,
      things,
      setDeleteData,
      modalData,
      setModalData,
      setEditData
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
    <Edit />
    </DataContext.Provider>
  );
}

export default App;