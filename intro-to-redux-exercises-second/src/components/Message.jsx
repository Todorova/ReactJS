import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionObj from './../actions/messageActions';

class Message extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            initValue: this.props.content,
            value: this.props.content,
            showConfirmButtons: this.props.showConfirmButtons
        }

        this.onChange = this.onChange.bind(this);
        this.checkContent = this.checkContent.bind(this);
    }

    componentWillReceiveProps(props){
        this.setState(
            {
                initValue: props.content,
                value: props.content,
                showConfirmButtons: props.showConfirmButtons
            }
        )
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    checkContent() {
        if (this.state.initValue != this.state.value) {
            this.setState({ showConfirmButtons: true })
        }
    }

    render() {
        if (!this.state.showConfirmButtons) {
            return (
                <div>
                    <input
                        type='text'
                        name='value'
                        onChange={this.onChange}
                        value={this.state.value} />
                    <input type='submit' value='Edit message' onClick={this.checkContent} />
                </div>
            )
        } else {
            return (
                <div>
                    <input type='text' name='value' onChange={this.onChange} value={this.state.value} />
                    <button type='submit'
                        onClick={() => {
                            this.props.discardChanges({
                                message: this.state
                            })
                        }}>&#10006; </button>
                    <button type='submit' onClick={() => {
                        this.props.saveChanges({
                            message: this.state
                        })
                    }}>&#10004; </button>
                </div>
            )
        }

    }
}

function mapStateToProps(state) {
    return {
        messages: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveChanges: (payload) => {
            dispatch(actionObj.saveChangedMessage(payload));
        },
        discardChanges: (payload) => {
            dispatch(actionObj.discardChanges(payload));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Message);