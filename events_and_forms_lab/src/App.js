import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleBtn from './components/ToggleBtn';
import FocusDiv from './components/FocusDiv';
import Form from './components/forms/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ToggleBtn/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FocusDiv number='1'/>
        <FocusDiv number='2'/>
        <br/>
        <FocusDiv number='3'/>
        <FocusDiv number='4'/>

        <Form/>
      </div>
    );
  }
}

export default App;
