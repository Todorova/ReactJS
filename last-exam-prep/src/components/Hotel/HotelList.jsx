import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hotel from './Hotel';
import { fetchHotelsAction } from './../../actions/hotelActions';
import { withRouter } from 'react-router-dom';

class HotelsList extends Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.props.fetchHotels();
        //console.log('hotels are comming!');
    }

    render() {
        console.log(this.props.hotels)
        if(this.props.hotels.hotels){
            //console.log('loading')
            return(<div>Loading...</div>)
        }

        return (
            <div>
                <h1>Hotels are going to be loaded here</h1>
                {this.props.hotels.map(hotel => {
                    return <Hotel key={hotel.id} image={hotel.image} id={hotel.id} name={hotel.name} />
                })}
            </div>
        )
    }

}


function mapStateToProps(state, ownProps) {
    //console.log(state)

    return {
        hotels: state.hotel.hotels || {
            hotels: []
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchHotels: () => dispatch(fetchHotelsAction())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HotelsList));