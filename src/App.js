import React, { useReducer } from 'react';
import AppContext from './context';
import reducer, {initialState} from './context/reducer';

import InputSection from './components/InputSection';
import NotesSection from './components/NotesSection';
import './App.scss';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container">
        <h1>My Notes</h1>
        <InputSection />
        <div className="line"></div>
        <NotesSection />
      </div>
    </AppContext.Provider>    
  );
}

export default App;
