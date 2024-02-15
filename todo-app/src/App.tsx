import React from 'react';

import './App.css';
import Inputfield from './Components/inputField/Inputfield';

const App:React.FC=()=> {
  return (
    <div className="App">
    <span className='heading'>Taskify</span>
    <Inputfield/>
    </div>
  );
}

export default App;
