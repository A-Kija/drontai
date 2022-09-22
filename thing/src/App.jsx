import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import MainContext from './Components/MainContext';
import Main from './Components/things/Main';
import { useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Components/Nav';


function App() {

  const [msgs, setMsgs] = useState([]);

  const createMsg = useCallback((text, type = 'info') => {
    const id = uuidv4();
    setMsgs(m => [...m, { id, text, type }]);
    setTimeout(() => setMsgs(m => m.filter(msg => msg.id !== id)), 4000);
  }, []);

  return (
    <BrowserRouter>
      <MainContext.Provider value={{
        createMsg,
        msgs
      }}>
        <Nav />
        <Main />
      </MainContext.Provider>
    </BrowserRouter>
  );
}

export default App;