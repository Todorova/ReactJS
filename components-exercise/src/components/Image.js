import React, { Component } from 'react';

class Image extends Component {

    constructor(props) {
        super(props);
        this.imageUrl = this.props.imageUrl;
        this.showDetails = this.props.showDetails;
    }

    render() {

        return (
            <div>
                <img className='image'
                    alt='image'
                    src={this.props.imageUrl}
                    //onClick={() => {this.props.showDetails()}}
                     />
            </div>
        )


    }



}


export default Image;