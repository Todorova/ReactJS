import { createStore } from 'redux';
import calculator from './reducers';
import {add, subtract, divide, multiply} from './actionCreators';

const store = createStore(calculator);
export default store;

