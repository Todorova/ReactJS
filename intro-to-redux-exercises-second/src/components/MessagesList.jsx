import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import AddMessageForm from './AddMessageForm';
import actionObj from './../actions/index';

class MessagesList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {console.log(this.props.messages)}
                <h1>Messages</h1>
                <AddMessageForm />
                {this.props.messages.map(message => {
                    return <Message 
                    key={message.index} 
                    content={message.content} 
                    id={message.index}
                    showConfirmButtons={false}/>
                })}
                <input type='submit' value='Delete last' onClick={() => {this.props.deleteLastMessage()}}/>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        deleteLastMessage: () => {
            dispatch(actionObj.deleteLast());
        }
    }
}

function mapStateToProps(state) {
    return {
        messages: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);



