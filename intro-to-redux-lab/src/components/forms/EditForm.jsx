import React, { Component } from 'react';

//connected class
export default class EditForm extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='box-large'>
                <h1>My Profile</h1>
                <div className='content'>
                    <div className='info'>
                        <div className='col entered'>
                            <span class='avatar'>&#9787;</span>
                            <button>Change</button>
                        </div>
                        <div className='col'>
                            <form className='profile-editor'>
                                <label>First Name:</label><input type='text' value='Ivan'/><br/>
                                <label>Last Name:</label><input type='text' value='Todorov'/><br/>
                                <label>Phone number:</label><input type='text' value='08888888888'/><br/>
                                <label>Email:</label><input type='text' value='i@pesho.bg'/><br/>
                                <input type='submit' value='Save changes'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


