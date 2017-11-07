import React, { Component } from 'react';


export default class Header extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        let username = this.props.username;
        if (username.trim().length === 0) {

            return (
                <header>
                    <span className="logo">☃</span><span className="header">SeenIt</span>
                    <div id="profile">
                    </div>
                </header>
            )

        }
        return (
            <header>
                <span className="logo">☃</span><span className="header">SeenIt</span>
                <div id="profile">
                    <span>Hello {username}</span> | <input type='submit' value='Logout' onClick={this.props.logout}/>
                </div>
            </header>
        )


    }


}

