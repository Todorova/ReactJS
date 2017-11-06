import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider';
import CharactersList from './components/CharactersList';
import Details from './components/Details';
import observerMenu from './utils/Observer';

class App extends Component {

  constructor() {
    super();

    this.state = {
      focusImageId: 0,
      rosterImageId:0
    }

    this.changeFocusImageId = (id) => {
      this.setState({ focusImageId: id });
    }

    this.eventHandler = (newState) => {
      this.setState({rosterImageId: newState});
    }

  }

  //add event to the observer
  componentDidMount(){
    observerMenu.addObserver('changeImage', this.eventHandler);
  }

  render() {
    console.log(this.state.rosterImageId);

    return (
      <div className='App'>
        <Slider updateFunc={this.changeFocusImageId} focusImageId={this.state.focusImageId} />
        <CharactersList />
        <Details characterId={this.state.rosterImageId}/>
      </div>
    );
  }
}

export default App;
