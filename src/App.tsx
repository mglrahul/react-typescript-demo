import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

const logo = require('./logo.svg');

import Modal from 'react-bootstrap/node_modules/react-overlays/lib/Modal';
Modal.prototype.componentWillMount = function componentWillMount() {
  this.focus = function focus() {};
};

import ModelFirst from './ModelFirst';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ModelFirst />
      </div>
    );
  }
}

export default App;
