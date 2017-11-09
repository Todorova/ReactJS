import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts, selectedId, clickHandler}) => {

    return (
        <div id='list'>
            <h1>Contacts</h1>
            <div className='content'>
                <div className='contact' data-id='id'>
                    {contacts.map(contact => {
                        return <Contact
                            selected={contact.id === selectedId}
                            key={contact.id}
                            firstName={contact.firstName}
                            lastName={contact.lastName}
                            //call this function with 'contact.id' - closure
                            onClick={() => clickHandler(contact.id)}
                        />
                    })}

                </div>
            </div>
        </div>
    )
}

export default ContactList;