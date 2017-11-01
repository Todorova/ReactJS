import React, { Component } from 'react';
import './Form.css';


export default class Form extends Component {

    constructor(props) {
        super(props);

        this.state = { name: '', password: '', bio: '', make: 'volvo' };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //takes event as param
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    //handle submit form
    onSubmit(e) {
        e.preventDefault;
        alert(this.state.name);
        //fetch('API','val')
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className='login-form'>
                Name:
                <input
                    onChange={this.onChange}
                    type='text'
                    name='name'
                    value={this.state.name} /><br/>
                Password:
                <input
                    onChange={this.onChange}
                    type='text'
                    name='password'
                    value={this.state.password} /><br/>
                Biography:
                <textarea
                    name='bio'
                    onChange={this.onChange}
                    value={this.state.bio} /><br/>
                <input type='submit' value='submit form' />
                <select value={this.state.make} onChange={this.onChange} name='make'>
                    <option value='volvo'>Volvo</option>
                    <option value='lada'>Lada</option>
                    <option value='volga'>Volga</option>
                </select>
            </form>
        )

    }
}