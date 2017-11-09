import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './components/Counter';
import CountersList from './components/CountersList';


let generatorReducer = (store, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return [...store.slice(0, action.payload.index),
            Object.assign({}, store[action.payload.index],
                { value: store[action.payload.index].value + action.payload.step },
                ...store.slice(action.payload.index + 1))];
        case 'DECREMENT':
            return store.value--;
        case 'CLEAR':
            return store.value = 0;
        case 'ADD_COUNTER':
            return [...store, { index: store.length, value: 0 }];
        case 'REMOVE_LAST':
            return [...store.slice(0, store.length - 1)]
        default:
            return store;
    }
}

const actionObj = {
    addCounter: () => {
        return { type: 'ADD_COUNTER' };
    },
    removeCounter: () => {
        return { type: 'REMOVE_LAST' };
    },
    incrementCounter: (payload) => {
        console.log(payload)
        return { type: 'INCREMENT', payload };
    },
    decrementCounter: (payload) => {
        return { type: 'DECREMENT', payload };
    },
    clearCounter: (payload) => {
        return { type: 'CLEAR', payload };
    }
}

const store = createStore(generatorReducer, [{ index: 0, value: 0 }]);

function addCounterAction() {
    store.dispatch(actionObj.addCounter());
}

function removeCounterAction() {
    store.dispatch(actionObj.removeCounter());
}

function incrementCounter(payload) {
    console.log('increment');
    store.dispatch(actionObj.incrementCounter(payload));
}

function decrementCounter() {
    store.dispatch(actionObj.decrementCounter());
}

function clearCounter() {
    store.dispatch(actionObj.clearCounter());
}

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <CountersList
                counters={store.getState()}
                addCounterHandler={addCounterAction}
                removeCounterHandler={removeCounterAction}
                increment={incrementCounter}
                decrement={decrementCounter}
                clear={clearCounter}
            />
        </Router>
    </Provider>
), document.getElementById('root'));



registerServiceWorker();
