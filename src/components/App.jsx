import React from 'react';
import '../style/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App  = () => {
  let total = 555;
  let next = -55;
  let operation = 'AC';
  let culator = {total, next, operation};
  console.log(calculate(culator));
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
