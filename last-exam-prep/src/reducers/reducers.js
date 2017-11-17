import { registerReducer, loginReducer } from './authReducer';
import hotelReducer from './hotelReducer';


export default {
    register: registerReducer,
    login: loginReducer,
    hotel: hotelReducer
};