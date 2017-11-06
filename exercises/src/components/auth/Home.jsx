import React, { Component } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default class Home extends Component {

    constructor(props) {
        super(props);


    }


    render() {
        return (
            <section id="viewWelcome">
                <div class="welcome">
                    <div class="signup">
                        <LoginForm/>
                        <RegisterForm/>
                    </div>

                    <div class="about">
                        <h1>Welcome to SeenIt</h1>
                        <p>
                            Share interesting links and discuss great content. It's what's happening now.
                    </p>
                        <p>Sign in or sign up in a second.</p>
                    </div>
                </div>
            </section>
        )

    }


}