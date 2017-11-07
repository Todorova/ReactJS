import React, { Component } from 'react';
import requestHandler from './../../utils/requestHandler';
export default class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.dataCollector = this.dataCollector.bind(this);
        this.login = this.login.bind(this);
    }

    dataCollector(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    login(e) {
        e.preventDefault();

        this.setState({ loading: true });

        requestHandler.login(
            {
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
            <form id="loginForm" onSubmit={this.login}>
                <h2>Sign In</h2>
                <label>Username:</label>
                <input onChange={this.dataCollector} name="username" type="text" />
                <label>Password:</label>
                <input onChange={this.dataCollector} name="password" type="password" />
                <input id="btnLogin" value="Sign In" type="submit" />
            </form>
        )


    }


}
