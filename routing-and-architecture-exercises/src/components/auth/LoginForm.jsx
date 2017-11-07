import React, { Component } from 'react';

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

    login(e){
        e.preventDefault();
        fetch('https://baas.kinvey.com/user/kid_HkGx9W00W/login', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa('kid_HkGx9W00W:c9f5c3d550804da48b90f0a02eb789d1'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(response => {
            return response.json();
        })
        .then(parsedJSON => {
            let token = parsedJSON._kmd.authtoken;
            let user = {id: parsedJSON._id, username: parsedJSON.username}
            this.props.saveUserAuth(token, user);
        })
        .catch((e) => {
            console.log(e);
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
