import React, { Component } from 'react'

import validationFunc from './../../utils/formValidator'
import Input from './formFields/Input'


export default class LoginForm extends Component {

    constructor(props) {
        super(props);


        this.state = {
            email: '',
            password: ''
        }
    }

    submitLogin(e){
        e.preventDefault();
    }

    render() {

        let validPass = this.state.password !== '';
        let validEmail = this.state.email !== '';


        return (
            <form onSubmit={this.submitLogin.bind(this)}>
                <fieldset className='App'>
                    <div style={{ display: 'inline-grid' }}>
                        <h2>Log in</h2>
                        <Input
                            type='text'
                            data='email'
                            name='Email'
                            func={e => {
                                this.setState({ email: e.target.value })
                            }}
                            valid={validEmail}
                        />

                        <Input
                            type='password'
                            data='password'
                            name='Password'
                            func={e => {
                                this.setState({ password: e.target.value })
                            }}
                            valid={validPass}
                        />

                        <input
                            style={({ "display": validPass && validEmail === true ? '' : 'none' })}
                            type='submit'
                            value='Login'
                        />
                    </div>
                </fieldset>
            </form>
        )

    }


}