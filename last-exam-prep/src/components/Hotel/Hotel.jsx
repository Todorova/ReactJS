import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default class HotelsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="col-md-4">
                <div className="card text-white bg-primary">
                    <div className="card-body">
                        <blockquote className="card-blockquote">
                            <img src={this.props.image} />
                            <footer>
                                <cite title="Source Title">{this.props.name}</cite>
                            </footer>
                            <div className="pull-right">
                                <Link to={'/details/' + this.props.id} className="btn btn-info">Details</Link>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        )
    }

}