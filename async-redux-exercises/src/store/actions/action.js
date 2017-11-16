const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const LOGOUT = 'LOGOUT';

export default{
    login:(payload) => {
        return{
            type: LOGIN,
            payload: payload
        }
    },
    register: (payload) => {
        return{
            type: REGISTER,
            payload: payload
        }
    }
}