import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hotel from './Hotel';
import { fetchHotelsAction } from './../../actions/hotelActions';
import { withRouter } from 'react-router-dom';

class HotelsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hotels are going to be loaded here</h1>
                {this.props.hotels.hotel.map(hotel => {
                    console.log(hotel)
                    return <Hotel key={hotel.id} image={hotel.image} id={hotel.id} name={hotel.name}/>
                })}
            </div>
        )
    }

}


function mapStateToProps(state) {
    return {
        hotels: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchHotels: dispatch(fetchHotelsAction())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HotelsList));