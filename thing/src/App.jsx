import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import MainContext from './Components/MainContext';
import Main from './Components/things/Main';


function App() {

  const [msgs, setMsgs] = useState([]);

  const createMsg = (text, type = 'info') => {
    const id = uuidv4();
    setMsgs(m => [...m, { id, text, type }]);
    setTimeout(() => setMsgs(m => m.filter(msg => msg.id !== id)), 4000);
  }

  return (
    <MainContext.Provider value={{
      createMsg,
      msgs
    }}>
      <Main />
    </MainContext.Provider>
  );
}

export default App;