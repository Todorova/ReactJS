import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Auth from './Auth';
import actions from './../../store/actions/action';

let ElementBlender = (props) => {
    if (Object.keys(props.state.auth).length == 0) {
        return (
            <Switch>
                <Route exact path='/' component={Auth} />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
    )

}

function mapStateToProps(state) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: () => dispatch(actions.login)
    }
}

export default connect(mapStateToProps, null)(ElementBlender)



