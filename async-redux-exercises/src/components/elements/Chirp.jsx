import React from 'react';

let Chirp = (props) => {
    console.log(props);
    return (

        <article class="chirp">
            <div class="titlebar">
                <a href="#" class="chirp-author">{props.props.author}</a>
                <span class="chirp-time">{calcTime(props.props._kmd.lmt, props.props._kmd.ect)}</span>
            </div>
            <p>{props.props.text}</p>
        </article>
    )
}

function calcTime(dateIsoFormat) {
    let diff = new Date - (new Date(dateIsoFormat));
    diff = Math.floor(diff / 60000);
    if (diff < 1) return 'less than a minute';
    if (diff < 60) return diff + ' minute' + pluralize(diff);
    diff = Math.floor(diff / 60);
    if (diff < 24) return diff + ' hour' + pluralize(diff);
    diff = Math.floor(diff / 24);
    if (diff < 30) return diff + ' day' + pluralize(diff);
    diff = Math.floor(diff / 30);
    if (diff < 12) return diff + ' month' + pluralize(diff);
    diff = Math.floor(diff / 12);
    return diff + ' year' + pluralize(diff);
    function pluralize(value) {
        if (value !== 1) return 's';
        else return '';
    }
}



export default Chirp;