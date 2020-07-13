import React from 'react';
import '../style/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App  = () => {
  let total = ''; // by def should be always 0 no matter what
  let next = '';
  let operation = '+';
  let culator = {total, next, operation};
  let tt = calculate(culator, '=');
  console.log(tt).newTotal.toString();
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
