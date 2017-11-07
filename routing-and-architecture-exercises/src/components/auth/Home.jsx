import React, { Component } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import About from './../common/About';
import Menu from './../common/Menu';

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="viewWelcome">
                {
                    this.props.authToken === '' ? (

                        <div className="welcome">
                            <div className="signup">
                                <div>
                                    <LoginForm saveUserAuth={this.props.saveUserAuth} />
                                    <RegisterForm saveUserAuth={this.props.saveUserAuth} />
                                </div>
                            </div>
                            <About />
                        </div>
                    ) : (
                            <Menu />
                        )
                }
            </section>

        )

    }


}