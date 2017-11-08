import React, { Component } from 'react';
import Post from './partials/Post';
import reqHandler from './../../utils/requestHandler.js';

class Catalog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        reqHandler.pullPosts()
            .then(data => {
                this.setState({ posts: data });
            })
    }

    render() {
        return (
            <section id="viewCatalog">
                <div class="posts">
                    {this.state.posts.map(post => {
                        return <Post key={post._id} props={post}/>
                    })}
            </div>
            </section>
        )
    }


}


export default Catalog;