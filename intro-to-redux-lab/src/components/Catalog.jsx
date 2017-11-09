import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import EditForm from './forms/EditForm';

class Catalog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedId: 0
        }

        this.onContactClick = this.onContactClick.bind(this);
    }

    onContactClick(id) {
        this.setState({ selectedId: id });
    }

    render() {
        return (
            <div id='book' className='box-large'>
                <ContactList
                    contacts={this.props.contacts}
                    clickHandler={this.onContactClick}
                    selectedId={this.state.selectedId}
                />
                <Switch>
                    <Route path='/' exact to={(
                        <ContactDetails
                            user={this.props.contacts.filter(x => x.id === this.state.selectedId)[0]} />
                    )} />
                    <Route path='/edit' to={(
                        <EditForm />
                    )} />
                </Switch>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        contacts: state
    }
}

export default connect(mapStateToProps)(Catalog);