import './App.scss';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import DataContext from './Components/DataContext';
import List from './Components/List';
import Create from './Components/Create';
import Bin from './Components/Bin';
import Edit from './Components/Edit';
import Msg from './Components/Msg';

const textures = [
  { id: 1, title: 'Wood' },
  { id: 2, title: 'Metal' },
  { id: 3, title: 'Paper' },
  { id: 4, title: 'Stone' }
]

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now())
  const [things, setThings] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [binData, setBinData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [undoDeleteData, setUndoDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3003/api')
      .then(res => {
        setThings(res.data);
      });
  }, [lastUpdate]);

  // CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }
    axios.post('http://localhost:3003/api', createData)
      .then(res => {
        setLastUpdate(Date.now());
        createMsg(res.data.msg.text, res.data.msg.type);
      })
  }, [createData]);

  // SOFT DELETE
  useEffect(() => {
    if (null === binData) {
      return;
    }
    axios.delete('http://localhost:3003/api/soft/' + binData.id)
      .then(res => {
        setLastUpdate(Date.now());
        createMsg(res.data.msg.text, res.data.msg.type);
      })
  }, [binData]);

  // HARD DELETE
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    axios.delete('http://localhost:3003/api/' + deleteData.id)
      .then(res => {
        setLastUpdate(Date.now());
        createMsg(res.data.msg.text, res.data.msg.type);
      })
  }, [deleteData]);

  // UNDO DELETE
  useEffect(() => {
    if (null === undoDeleteData) {
      return;
    }
    axios.delete('http://localhost:3003/api/undo/' + undoDeleteData.id)
      .then(res => {
        setLastUpdate(Date.now());
        createMsg(res.data.msg.text, res.data.msg.type);
      })
  }, [undoDeleteData]);

  // EDIT
  useEffect(() => {
    if (null === editData) {
      return;
    }
    axios.put('http://localhost:3003/api/' + editData.id, editData)
      .then(res => {
        setLastUpdate(Date.now());
        createMsg(res.data.msg.text, res.data.msg.type);
      })
  }, [editData]);

  const createMsg = (text, type = 'info') => {
      const id = uuidv4();
      setMsgs(m => [...m, {id, text, type}]);
      setTimeout(() => setMsgs(m => m.filter(msg => msg.id !== id)), 4000);
  }

  return (
    <DataContext.Provider value={{
      things,
      textures,
      setCreateData,
      setBinData,
      setDeleteData,
      setUndoDeleteData,
      modalData,
      setModalData,
      setEditData,
      msgs,
      createMsg
    }}>
      <div className="container">
        <div className="bin">
          <div className="box-1">
            <Create />
            <Bin />
          </div>
          <div className="box-2">
            <List />
          </div>
        </div>
      </div>
      <Edit />
      <Msg />
    </DataContext.Provider>
  );
}

export default App;