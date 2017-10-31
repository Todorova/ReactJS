import React, { Component } from 'react';
import  observerMenu from './../utils/Observer';

class Image extends Component {

    constructor(props) {
        super(props);
        this.imageUrl = this.props.imageUrl;
        //this.showDetails = this.props.showDetails;
    }

    render() {
        
        return (
            <div onClick={() => {observerMenu.executeObserver('changeImage',{id:this.props.id})}}>
                <img className='image'
                    alt='image'
                    src={this.props.imageUrl}
                     />
            </div>
        )


    }



}


export default Image;