import React, { Component } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import About from './../common/About';


export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            authToken: ''
        }

        this.saveUserAuth = this.saveUserAuth.bind(this);
    }

    saveUserAuth(token) {
        this.setState({
            authToken: token
        })
    }

    render() {
        return (
            <section id="viewWelcome">
                <div className="welcome">
                    <div className="signup">
                        {this.state.authToken === '' ? (
                            <div>
                                <LoginForm saveUserAuth={this.saveUserAuth} />
                                <RegisterForm saveUserAuth={this.saveUserAuth} />
                            </div>
                        ) : (
                                null
                            )}
                    </div>
                    <About />
                </div>
            </section>
        )

    }


}