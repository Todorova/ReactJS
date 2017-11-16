import React from 'react';
import ReactDOM from 'react-dom';
import './site.css';
import './contact.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import rootReducer from './components/store/reducers/rootReducer';


let data = [{
    "id": "1",
    "firstName": "Pesho",
    "lastName": "Petrov",
    "phone": "0888 213 323",
    "email": "pesho@pesho.bg"
},
{
    "id": "2",
    "firstName": "Dancho",
    "lastName": "Bojkov",
    "phone": "0888 8888888",
    "email": "dancho@pesho.bg"
},
{
    "id": "3",
    "firstName": "Ginka",
    "lastName": "Gineva",
    "phone": "0888 1111111",
    "email": "ginka@pesho.bg"
}]

function myReducer(state = '',action){
    return state;
}


const logger = store => next => action => {
    console.log('inside middleware');
    console.log(action.type);
    const result = next(action);
    return result;
} 

const store = createStore(combineReducers(
    {
        rootReducer,
        myReducer
    }
), applyMiddleware(logger));

store.dispatch({type: 'TEST_ACTION'});
store.dispatch({type: 'OTHER_TEST_ACTION'});

ReactDOM.render((
    <Provider store={store}>
    <p>Hi</p>
        {/* <Router>
            <App />
        </Router> */}
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
