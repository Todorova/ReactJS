import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './Login';
import RegisterForm from './Register';
import actions from './../../store/actions/fetcher';


class Auth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: true
        }

        this.dataCollector = this.dataCollector.bind(this);
        this.loginState = this.loginState.bind(this);
    }

    dataCollector(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    loginState() {
        this.setState({ login: !this.state.login })
    }

    render() {
        //console.log(this.props);

        if (this.state.login) {
            return (
                <LoginForm viewFunc={this.loginState} dataFunc={this.dataCollector} />
            )
        } else {
            return (
                <RegisterForm  
                userProps={this.state}
                registerFunc={this.props.registerFunc} 
                viewFunc={this.loginState} 
                dataFunc={this.dataCollector} />
            )
        }

    }

}

function mapStateToProps(state) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registerFunc: () => dispatch(actions(this.state))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

