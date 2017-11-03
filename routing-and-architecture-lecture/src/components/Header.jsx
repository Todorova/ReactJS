import React, { Component } from 'react';
import {NavLink} from 'react-router-dom' 
import './Header.css';


export default class Header extends Component {

    constructor() {
        super();
    }

    render() {

        return (
            <header>
                <h1>Site Logo</h1>
                <nav>
                    <NavLink activeClassName='activeLink' to='/'>Home</NavLink>
                    <NavLink activeClassName='activeLink' to='/about'>About</NavLink>
                    <NavLink activeClassName='activeLink' to='/comments'>Comments</NavLink>
                    <NavLink activeClassName='activeLink' to='/posts'>Posts</NavLink>
                </nav>
            </header>
        )
    }
}