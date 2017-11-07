import React, { Component } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import About from './../common/About';

export default class Home extends Component {

    constructor(props) {
        super(props);   
    }

    render() {
        return (
            <section id="viewWelcome">
                <div className="welcome">
                    <div className="signup">
                        {this.props.authToken === '' ? (
                            <div>
                                <LoginForm saveUserAuth={this.props.saveUserAuth} />
                                <RegisterForm saveUserAuth={this.props.saveUserAuth} />
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