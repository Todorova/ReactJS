import React, {Component} from 'react';

export default class ToggleBtn extends Component{

    constructor(props){
        super(props);

        this.state = {power: true};

        //bind event handlers
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState(prevState => ({power: !prevState.power}));
    }


    render(){

        return(
            <button onClick={this.clickHandler}>
                {this.state.power ? 'ON' : 'OFF'}
            </button>
        );


    }

}


