import React, { Component } from 'react';
import { Router, Link, Switch, Redirect } from 'react-router-dom';


export default class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="menu">
                <div className="title">Navigation</div>
                <Link className="nav" to="/catalog">Catalog</Link>
                <Link className="nav" to="/submit">Submit Link</Link>
                <Link className="nav" to="/myPosts">My Posts</Link>
            </div>
        )
    }

}
