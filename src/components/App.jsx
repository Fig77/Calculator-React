import React, { Component } from 'react';
import '../style/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    total: null,
    next: null,
    operation: null,
    result: '0'
  };
}

render() {
const { result } = this.state;
return (
  <div className="App d-flex flex-column justify-c-center align-i-center">
    <Display result = {result}/>
    <div>
      <ButtonPanel />
    </div>
  </div>
 );
 }
}
export default App;
