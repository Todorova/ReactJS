import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionObj from './../actions/index';

class AddMessageForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <input type='text' name='value' onChange={this.onChange} value={this.props.content} />
                <input type='submit' value='Add message' onClick={() => { this.props.addMessage({ value: this.state.value }) }} />
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        messages: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addMessage: (payload) => {
            dispatch(actionObj.addMessage(payload));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddMessageForm);