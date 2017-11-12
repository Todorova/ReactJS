import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CountersList from './components/CountersList';


// function addCounterAction() {
//   store.dispatch(actionObj.addCounter());
// }

// function removeCounterAction() {
//   store.dispatch(actionObj.removeCounter());
// }

// function incrementCounter(payload) {
//   console.log('increment');
//   store.dispatch(actionObj.incrementCounter(payload));
// }

// function decrementCounter(payload) {
//   console.log('decrement');
//   store.dispatch(actionObj.decrementCounter(payload));
// }

// function clearCounter(payload) {
//   console.log('clear');
//   store.dispatch(actionObj.clearCounter(payload));
// }



class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Router>
            <CountersList/>
        </Router>
      </div>
    );
  }
}




export default App;
