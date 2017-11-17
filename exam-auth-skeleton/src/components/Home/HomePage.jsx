import React, { Component } from 'react';
import { connect } from 'react-redux';


export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }



    render() {

        return (
            <div className="container">
                <h1>Home Page</h1>
            </div>
        );
    }
}
