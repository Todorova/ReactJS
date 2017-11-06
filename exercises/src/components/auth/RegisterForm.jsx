import React, { Component } from 'react';

export default class RegisterForm extends Component {

    constructor(props) {
        super(props);

        this.dataCollector = this.dataCollector.bind(this);
    }

    dataCollector(e) {
        console.log(e);
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form id="registerForm">
                <h2>Register</h2>
                <label>Username:</label>
                <input name="username" type="text" />
                <label>Password:</label>
                <input name="password" type="password" />
                <label>Repeat Password:</label>
                <input name="repeatPass" type="password" />
                <input id="btnRegister" value="Sign Up" type="submit" />
            </form>
        )


    }


}




