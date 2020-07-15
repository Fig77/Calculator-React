import React, { Component } from 'react';
import '../style/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate'

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    total: '0',
    next: null,
    operation: null,
    display: '0'
  };
  this.handler = this.handler.bind(this);
}
  
handler = (name) => {
  const data = calculate.calculate(this.state, name);
  this.setState(data.result);
}

render() {
const { display } = this.state;
return (
  <div className="App d-flex flex-column justify-c-center align-i-center">
    <div>
    <Display result = {display}/>
    
      <ButtonPanel handleClick = {this.handler} />
    </div>
  </div>
 );
 }
}
export default App;
