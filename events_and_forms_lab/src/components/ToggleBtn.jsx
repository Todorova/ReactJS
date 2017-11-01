import React, {Component} from 'react';

export default class ToggleBtn extends Component{

    constructor(props){
        super(props);

        this.state = {power: true};
    }

    clickHandler(){
        this.setState({power: !this.state.power});
    }


    render(){

        return(
            <button onClick={this.clickHandler}>
                {this.state.power? 'ON' : 'OFF'}
            </button>
        );


    }

}


