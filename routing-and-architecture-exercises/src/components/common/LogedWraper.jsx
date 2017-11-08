import React from 'react';
import Menu from './Menu';
import ViewComponent from './ViewComponent';

const Wrapper = (props) => {

    return(
        <div>
            <Menu/>
            <ViewComponent />
        </div>
    )
}

export default Wrapper;