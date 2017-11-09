import React from 'react';
import './../index.css';


const Counter = (props) => {

    return (
        <div className='container'>
            <h3>{props.props.value}</h3>
            {console.log(props.increment)}
            <input type='submit' value='INCREMENT' onClick={() => { props.increment({index: props.props.index, step: 1}) }}/>
            <input type='submit' value='DECREMENT' onClick={() => { props.decrement(props.props.index) }}/>
            <input type='submit' value='CLEAR' onClick={() => { props.clear(props.props.index) }}/>
        </div>
    )
 
}

export default Counter;