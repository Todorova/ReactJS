import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchHotelByIdAction, createReviewAction, fetchHotelReviewsAction } from './../../actions/hotelActions';
import HomePage from './../../components/Home/HomePage';
import Input from './../Auth/Input';
import ReviewList from './../Reviews/ReviewList';

class DetailsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rating: '',
            comment: '',
            unauthorized: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        this.props.getData(this.props.match.params.id).then(d => {
            //this.setState({ details: d })
            this.props.fetchReviews(this.props.match.params.id).then(e => {
                console.log('reviews fetched successfully!!!');
            })
            console.log('hotel fetched successfully!!!')
        }).catch(err => {
            this.setState({ unauthorized: true })
            this.props.history.push('/');
        })

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSubmit(e) {
        e.preventDefault();

        this.props.createReview(this.props.state.hotel.focusHotel.id, {
            rating: this.state.rating,
            comment: this.state.comment
        });
    }

    render() {
        const { id, name, location, description, numberOfRooms, image, parkingSlots } =
            this.props.state.hotel.focusHotel;

        const { rating,
            comment } = this.state;

        return (
            <div className="col-md-4">


                <div className="card text-white bg-primary">
                    <div className="card-body">
                        <blockquote className="card-blockquote">
                            <img src={image} />
                            <p>Name</p>
                            <cite title="Source Title">{name}</cite>
                            <p>Location</p>
                            <cite title="Source Title">{location}</cite>
                            <p>Description</p>
                            <cite title="Source Title">{description}</cite>
                            <p>Rooms</p>
                            <cite title="Source Title">{numberOfRooms}</cite>
                            <p>parkingSlots</p>
                            <cite title="Source Title">{parkingSlots}</cite>
                            <form onSubmit={this.onSubmit}>
                                <div className="row space-top">
                                    <div className="col-md-4">
                                        <Input
                                            onChange={this.onChange}
                                            label="Rating"
                                            name="rating"
                                            value={rating} />
                                        <Input
                                            onChange={this.onChange}
                                            label="Comment"
                                            name="comment"
                                            value={comment} />
                                        <input type="submit" className="btn btn-primary" value="Add review" />
                                    </div>
                                </div>
                            </form>
                        </blockquote>
                    </div>
                    <div>
                        <h3>Reviews</h3>
                        <ReviewList />
                    </div>

                </div>
            </div>
        )
    }

}


function mapStateToProps(state) {
    return {
        state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getData: (id) => dispatch(fetchHotelByIdAction(id)),
        createReview: (id, review) => dispatch(createReviewAction(id, review)),
        fetchReviews: (id) => dispatch(fetchHotelReviewsAction(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailsPage));