import React, { Component } from 'react';
import '../style/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';


class App extends Component {
  constructor(props) {
    super(props);
    this.status = {
      result: '0',
    };
  }

  render() {
    const { result } = this.status;
    
    return (
      <div className="App d-flex flex-column  justify-c-column align-i-center">
        <Display result={result} />
        <div class="calculator">
          <ButtonPanel />
        </div>
      </div>
    );
  }
}
export default App;
