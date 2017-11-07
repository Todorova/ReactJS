import React, { Component } from 'react';
import dataCollector from './../../utils/dataCollector';
import requestHandler from './../../utils/requestHandler';

export default class RegisterForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.dataCollector = e => {
            this.setState(dataCollector(e));
        }

        this.register = this.register.bind(this);
    }

    register(e) {
        e.preventDefault();

        this.setState({ loading: true });

        requestHandler.register({
            username: this.state.username,
            password: this.state.password
        })
            .then(parsedJSON => {
                this.setState({ loading: false });
                let token = parsedJSON._kmd.authtoken;
                let user = { id: parsedJSON._id, username: parsedJSON.username }
                this.props.saveUserAuth(token, user);
                
            })
    }

    render() {
        return (

            <form id="registerForm" onSubmit={this.register}>
                <h2>Register</h2>
                <label>Username:</label>
                <input onChange={this.dataCollector} name="username" type="text" />
                <label>Password:</label>
                <input onChange={this.dataCollector} name="password" type="password" />
                <label>Repeat Password:</label>
                <input name="repeatPass" type="password" />
                <input id="btnRegister" value="Sign Up" type="submit" />
            </form>
        )


    }


}




