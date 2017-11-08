import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Catalog from './../appElems/Catalog';
import MyPosts from './../appElems/MyPosts';
import Submit from './../appElems/Submit';
import Home from './../auth/Home';
import Details from './../appElems/Details';

const ViewComponent = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Catalog}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/submit' component={Submit}/>
            <Route path='/myPosts' component={MyPosts} />
            <Route path='/details/:id' component={Details} />
        </Switch>
    )
}

export default ViewComponent;


