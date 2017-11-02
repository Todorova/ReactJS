import React, { Component } from 'react';

const CurrencyDisplay = (props) => {

    return (
        <div>
            {props.name.toUpperCase()}
            <input
                onChange={props.onChange}
                value={props.value}
                type='number'
                name={props.name}
            /> 
        </div>
    )

}

export default CurrencyDisplay;