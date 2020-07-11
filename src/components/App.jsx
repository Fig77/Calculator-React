import React from 'react';
import '../style/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const App  = () => {
return (
  <div className="App d-flex flex-column justify-c-center align-i-center">
    <Display />
    <div>
      <ButtonPanel />
    </div>
  </div>
 );
}
export default App;
