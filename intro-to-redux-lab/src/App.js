import React, { Component } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Catalog from './components/Catalog';


export default class App extends Component {

  constructor(props) {
    super(props);
  
   
  }

  render() {
    return (
      <div className="container">
          <Header/>
            <Catalog/>
          <Footer/>
      </div>
    );
  }
}
