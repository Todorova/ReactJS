import React, { Component } from 'react';


export default class PostList extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <h2>Posts</h2>
                <div>
                    {
                        this.props.posts &&
                        this.props.posts.map((post, index) => (
                            <article key={index}>
                                <span>{post.author}</span>
                                <p>{post.text}</p>
                            </article>
                        ))
                    }
                </div>
            </div>
        )
    }
}