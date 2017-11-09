import React from 'react';
import ReactDOM from 'react-dom';
import './site.css';
import './contact.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
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

const store = createStore(rootReducer, data);

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
