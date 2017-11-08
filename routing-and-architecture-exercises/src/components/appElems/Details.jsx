import React, { Component } from 'react';
import reqHandler from './../../utils/requestHandler';


export default class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPost: {},
            comments: []
        }
    }

    componentDidMount() {

        fetch(`https://baas.kinvey.com/appdata/kid_HkGx9W00W/posts/` + this.props.match.params.id, {
            method: 'GET',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('token')
            },
        })
            .then(response => {
                return response.json();
            })
            .then(parsedData => {
                this.setState({ currentPost: parsedData })
            }).catch(e => {
                console.log(e);
            })
    }

    render() {
        return (
            <section id="viewComments">
                {console.log(this.state)}
                <div class="post">
                    <div class="col thumbnail">
                        <a href="http://sammyjs.org/docs/api/0.7.4/all#Sammy.RenderContext-load">
                            <img src="src/RuditoFreshStep.jpg" />
                        </a>
                    </div>
                    <div class="post-content">
                        <div class="title">
                            <a href="http://sammyjs.org/docs/api/0.7.4/all#Sammy.RenderContext-load">
                                Sammy Docs
                        </a>
                        </div>
                        <div class="details">
                            <p>Very helpful and complete info. Even includes a detailed tutorial.</p>
                            <div class="info">
                                submitted 5 days ago by pesho
                        </div>
                            <div class="controls">
                                <ul>
                                    <li class="action"><a class="editLink" href="#">edit</a></li>
                                    <li class="action"><a class="deleteLink" href="#">delete</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="post post-content">
                    <form id="commentForm">
                        <label>Comment</label>
                        <textarea name="content" type="text"></textarea>
                        <input type="submit" value="Add Comment" id="btnPostComment" />
                    </form>
                </div>
                <article class="post post-content">
                    <p>Thanks, just what I needed.</p>
                    <div class="info">
                        submitted 5 days ago by Gosho | <a href="#" class="deleteLink">delete</a>
                    </div>
                </article>
            </section>
        )
    }


}