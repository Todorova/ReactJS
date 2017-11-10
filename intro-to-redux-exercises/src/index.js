import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers/index';

// [{ index: 0, value: 0 }]
const store = createStore(reducers, [{ index: 0, value: 0 }]);

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));



registerServiceWorker();
