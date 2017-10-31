import React, { Component } from 'react';
import Image from './Image';

class Details extends Component {

    constructor(props){
        super(props);
        this.state = {
            characterId: this.props.characterId,
            currentChar: {}
        }

    }

    componentDidMount(){
        
        //console.log(this.state)
        fetch('http://localhost:9999/character/' + this.state.characterId)
            .then(data => {
                return data.json();
            })
            .then(parsedData => {
                this.setState({currentChar: parsedData})
            });
    }

    // componentWillReceiveProps() {
    //     this.setState({characterId: this.props.characterId.id});

    //     fetch('http://localhost:9999/character/' + this.state.characterId)
    //     .then(data => {
    //         return data.json();
    //     })
    //     .then(parsedData => {
    //         this.setState({currentChar: parsedData})
    //     });

    // }

    render() {
        //console.log(this.state.currentChar);
        return (
            <fieldset className='images'>
                <Image className='image' imageUrl={this.state.currentChar.url} />
                <p>{this.state.currentChar.bio}</p>
            </fieldset>
        )


    }

}

export default Details;