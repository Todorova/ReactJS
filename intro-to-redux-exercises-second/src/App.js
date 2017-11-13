import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MessagesList from './components/MessagesList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MessagesList />
        </Router>
      </div>
    );
  }
}

export default App;
