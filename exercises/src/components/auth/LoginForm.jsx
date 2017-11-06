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
        console.log(e);
        this.setState({ [e.target.name]: e.target.value })
    }

    login(e){
        e.preventDefault();
        
        fetch('https://baas,kinvey.com/user/appID/', {
            method: 'POST',
            headers: {
                Authorization: 'Basic' + btoa('app_id:app_secret'),
                'Content-type': 'application-json'
            },
            body: JSON.stringify(this.state)
        })
        .then(response => {
            return resizeBy.json();
        })
        .then(parsedJSON => {
            console.log(parsedJSON)
        })

    }


    render() {
        return (
            <form id="loginForm" onSubmit={this.login}>
                {console.log(this.state)}
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
