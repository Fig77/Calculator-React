/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import '../syles/App.css';
import ButtonPanel from './ButtonPanel'
import Display from './Display'


class App extends Component {
  
state = {
    result: '0',
};

render() {
  const { result } = this.state;
  return (
    <div className='App'>
      <Display result={result} />
      <div>
        <ButtonPanel />
      </div>
    </div>
  );
 }
}
export default App;
