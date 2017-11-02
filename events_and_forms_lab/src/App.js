import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleBtn from './components/ToggleBtn';
import FocusDiv from './components/FocusDiv';
import Form from './components/forms/Form';
import Converter from './components/converter/Converter';
import List from './components/List';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { data: '' }
  }

  //send request
  // componentDidMount() {
  //   this.getData();
  // }

  // async getData(){
  //   try{
  //     await fetch('http://localhost:8080/data');
  //     console.log(data);
  //   }catch(e){
  //     console.dir(e);
  //   }

  // }


  render() {
    return (
      <div className="App">
        <List>
          {['pesho', 'gosho', 'mara', 'kiro'].map((el, index) => {
            return <li key={index}>{el}</li>
          })}
        </List>


        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ToggleBtn />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {[1, 2, 3, 4].map((elem, index) => {
          return (
            <FocusDiv key={index} number={elem}/>)

            })}
        <Form />
            <Converter />
      </div>
    );
        }
}

export default App;
