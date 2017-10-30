import React, { Component } from 'react';
import Image from './Image';


class CharactersList extends Component {

    constructor() {
        super();

        this.state = {
            images: []
        }

        this.promisifyState = obj => {
            return new Promise(res => {
                this.setState(obj, res)
            }).catch(e => {
                console.log(e);
            })
        }
    }


    // componentWillReceiveProps() {
    //     fetch('http://localhost:9999/roster')
    //         .then(data => {
    //             return data.json();
    //         })
    //         .then(parsedData => {
    //             console.log(parsedData);
    //             this.promisifyState({images: parsedData})
    //             .then(() => {
    //                 console.log('images loaded');
    //                 console.log(this.images)
    //             })
    //         })
    // }

    componentDidMount() {
        fetch('http://localhost:9999/roster')
            .then(data => {
                return data.json();
            })
            .then(parsedData => {
                this.promisifyState({ images: parsedData })
                    .then(() => {
                        console.log('images loaded');
                    })
            })
    }

    render() {
        let images = this.state.images;

        const components = images.map((image, index) =>
            //<div key={index} className='image'>
                <Image imageUrl={image.url} />
            //</div>
        )

        return (
            <div className='images'>
                {components}
            </div>
        )


    }


}

export default CharactersList;

