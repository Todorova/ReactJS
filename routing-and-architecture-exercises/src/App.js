import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/auth/Home';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authToken: '',
      user: {
        id: '',
        username: ''
      }
    }

    this.saveUserAuth = this.saveUserAuth.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    fetch('https://baas.kinvey.com/user/kid_HkGx9W00W/_logout', {
      method: 'POST',
      headers: {
        'Authorization': 'Kinvey ' + this.state.authToken
      }
    })
      .then(response => {
        this.setState({
          authToken: '',
          user: {
            id: '',
            username: ''
          }
        })
        return response.json();
      })
      .catch((e) => {
        console.log(e);
      })
  }

  saveUserAuth(token, user) {
    localStorage.setItem("token", token);
    localStorage.setItem("username", user.username);

    this.setState({
      authToken: token,
      user: user
    })
  }

  render() {
    return (
      <div className="App">

        <Header username={this.state.user.username} logout={this.logout} />
        <BrowserRouter>
          <Home authToken={this.state.authToken} saveUserAuth={this.saveUserAuth} />
        </BrowserRouter>
        <Footer />

      </div>
    );
  }

}

export default App;
