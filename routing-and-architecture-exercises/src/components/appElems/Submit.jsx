import React, { Component } from 'react';
import reqHandler from './../../utils/requestHandler';
import dataCollector from './../../utils/dataCollector';
import {Link, Redirect} from 'react-router-dom';


class Submit extends Component {

    constructor(props) {
        super(props);

        this.collectData = this.collectData.bind(this);
        this.createPost = this.createPost.bind(this);
    }

    collectData(e){
        e.preventDefault();
        this.setState(dataCollector(e));
    }

    componentDidMount(){
        this.setState({author: localStorage.getItem('username')});
    }

    createPost(e){
        console.log(this.state);
        e.preventDefault();
        reqHandler.createPost(this.state)
        .then(data => {
        });
    }

    render() {
        return (
            <form id="submitForm" class="submitForm" onSubmit={this.createPost}>
                <label>Link URL:</label>
                <input onChange={this.collectData} name="url" type="text" />
                <label>Link Title:</label>
                <input onChange={this.collectData} name="title" type="text" />
                <label>Link Thumbnail Image (optional):</label>
                <input onChange={this.collectData} name="imageUrl" type="text" />
                <label>Comment (optional):</label>
                <textarea onChange={this.collectData} name="description"></textarea>
                <input id="btnSubmitPost" value="Submit" type="submit" />
            </form>
        )
    }

}

export default Submit;