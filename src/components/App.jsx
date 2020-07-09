import React from 'react';
import logo from '../logo.svg';
import '../syles/App.css';
import ButtonPanel from './ButtonPanel'
import Display from './Display'

const App = () => {
  return (
    <div className="App">
      <div><Display text='0'/></div>
      <div>
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
