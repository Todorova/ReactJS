import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider';
import CharactersList from './components/CharactersList';



class App extends Component {

  constructor() {
    super();

    this.state = {
      focusImageId: 0
    }

    this.changeFocusImageId = (id) => {
      this.setState({focusImageId: id});
    }
  }

  render() {
    return (
      <div className='App'>
        <Slider updateFunc={this.changeFocusImageId} focusImageId={this.state.focusImageId} />
        <CharactersList />
      </div>
    );
  }
}

export default App;
