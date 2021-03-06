import React from 'react';
import dateUtil from './../../../utils/dateConverter';
import {Link} from 'react-router-dom';


const Post = (props) => {
    return (
        <article class="post">
            {console.log(props)}
            <div class="col rank">
                <span>{props.index}</span>
            </div>
            <div class="col thumbnail">
                <a href={props.props.url}>
                    <img src={props.props.imageUrl} />
                </a>
            </div>
            <div class="post-content">
                <div class="title">
                    <a href={props.props.url}>
                        {props.props.title}
                    </a>
                </div>
                <div class="details">
                    <div class="info">
                        submitted {dateUtil(props.props._kmd.lmt)} by {props.props.author}
                    </div>
                    <div class="controls">
                        <ul>
                            <li class="action">
                                <Link class="commentsLink" to={`/details/${props.props._id}`}>comments</Link>
                            </li>
                            <li class="action"><a class="editLink" href="#">edit</a></li>
                            <li class="action"><a class="deleteLink" href="#">delete</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </article>
    )
}


export default Post;