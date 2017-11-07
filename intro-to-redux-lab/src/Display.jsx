import React, { Component } from 'react';
import store from './calculator/Calculator';


export default class Display extends Component {
    constructor(props) {
        super(props)

        this.state = { storeData: 0 }
    }

    componentDidMount() {
        this.setState({ storeData: store.getState() })
    }


    onStoreUpdate() {
        this.setState({ storeData: store.getState() })
    }


    render() {
        return (
            <span>
                
            </span>
        )
    }

}