import React, { Component } from 'react';
import { fetchReviewsAction } from './../../actions/hotelActions';
import { withRouter } from 'react-router-dom';

class Review extends Component {

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="col-md-4">
            <div className="card text-white bg-primary">
                <div className="card-body">
                    <blockquote className="card-blockquote">
                        <p>Rating</p>
                        <cite title="Source Title">{this.props.rating}</cite>
                        <p>Comment</p>
                        <cite title="Source Title">{this.props.comment}</cite>
                        <p>From</p>
                        <cite title="Source Title">{this.props.user}</cite>
                    </blockquote>
                </div>
            </div>
        </div>
        )
    }
}

export default Review;