import React, { Component } from 'react';
import Input from './../Auth/Input';
import { createHotelAction } from './../../actions/hotelActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CreatePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            location: '',
            description: '',
            numberOfRooms: '',
            image: '',
            parkingSlots: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(e) {
        e.preventDefault();
        const hotel = {
            name: this.state.name,
            location: this.state.location,
            description: this.state.description,
            numberOfRooms: this.state.numberOfRooms,
            image: this.state.image,
            parkingSlots: this.state.parkingSlots
        };

        await this.props.createHotel(hotel);
        this.props.history.push('/hotels/all');
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { name,
            location,
            description,
            numberOfRooms,
            image,
            parkingSlots } = this.state;

        return (
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Create New Hotel</h1>
                        <p>Please fill all fields.</p>
                    </div>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div className="row space-top">
                        <div className="col-md-4">
                            <Input
                                onChange={this.onChange}
                                label="Name"
                                name="name"
                                value={name} />
                            <Input
                                onChange={this.onChange}
                                label="Location"
                                name="location"
                                value={location} />
                            <Input
                                onChange={this.onChange}
                                label="Description"
                                name="description"
                                value={description} />
                            <Input
                                onChange={this.onChange}
                                label="Number of rooms"
                                name="numberOfRooms"
                                type="number"
                                value={numberOfRooms} />
                            <Input
                                onChange={this.onChange}
                                label="Image"
                                name="image"
                                value={image} />
                            <Input
                                onChange={this.onChange}
                                label="Parking Slots"
                                name="parkingSlots"
                                value={parkingSlots} />
                            <input type="submit" className="btn btn-primary" value="Create" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({

    })
}


function mapDispatchToProps(dispatch) {
    return {
        createHotel: (data) => dispatch(createHotelAction(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreatePage))

