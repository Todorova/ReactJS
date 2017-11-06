import React, { Component } from 'react';


export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <span className="logo">☃</span><span className="header">SeenIt</span>
                <div id="profile"><span>pesho</span>|<a href="#/logout">logout</a></div>
            </header>
        )
    }


}

