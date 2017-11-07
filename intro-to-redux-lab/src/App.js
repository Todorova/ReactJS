import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './calculator/Calculator';
import {add, subtract, multiply, divide} from './calculator/actionCreators';
import {connect} from 'react-redux';


class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      storeData: 0,
      value: 0
    }
  
    this.onChange = this.onChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onStoreUpdate = this.onStoreUpdate.bind(this);

    store.subscribe(this.onStoreUpdate)
  }

  onChange(e){

    if(isNAN(e.target.value)){
      return;
    }

    this.setState({value: e.target.value})
  }

  componentDidMount(){
    this.setState({storeData: store.getState()})
  }

  onButtonClick(e){
    const action = actions[e.target.name](this.state.value);
    store.dispatch(action);
  }

  onStoreUpdate(){
    this.setState({storeData: store.getState()})
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.onChange} type='text' value={this.state.value}/>
        <button name="add" onClick={this.onButtonClick}>+</button>
        <button name="subtract" onClick={this.onButtonClick}>-</button>
        <button name="multiply" onClick={this.onButtonClick}>*</button>
        <button name="divide" onClick={this.onButtonClick}>/</button>
        <div>
        <p>Current value in store {this.state.storeData}</p>
        </div>
      </div>
    );
  }
}

export default connect()(App);
