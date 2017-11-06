import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ViewHome from './components/auth/Home';
import Home from './components/auth/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <ViewHome/>
          <Home/>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
