/* eslint-disable react/state-in-constructor,  import/no-named-as-default */
import React, { Component } from 'react';
import '../syles/App.css';
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
      <div className="App">
        <Display result={result} />
        <div>
          <ButtonPanel />
        </div>
      </div>
    );
  }
}
export default App;
