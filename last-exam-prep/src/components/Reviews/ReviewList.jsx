import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './Review';
import { fetchReviewsAction } from './../../actions/hotelActions';
import { withRouter } from 'react-router-dom';

class ReviewList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                {this.props.reviews.map((review, i) => {
                    return <Review key={i} rating={review.rating} comment={review.comment} user={review.user} />
                })}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reviews: state.hotel.focusReviews
    };
}

function mapDispatchToProps(dispatch) {
    return {
       
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReviewList));

