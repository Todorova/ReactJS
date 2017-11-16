import status from './status';
const appKey = 'kid_BkXe0AFyf';
const appSecret = '7a6dcaaed11344158ccf16314b9babce';
export default function fetchData(payload) {
    return (dispatch) => {
        dispatch(status.requestCalling());
        return fetch(`https://baas.kinvey.com/user/${appKey}/`, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(appKey + ':' + appSecret),
                'Content-Type': 'application/json'               
            },
            body:JSON.stringify(payload)
        })
            .then(res => res.json(),
            error => {
                dispatch(status.requestError());
            })
            .then(json => {
                dispatch({type: 'LOGIN', payload: json})
                dispatch(status.requestFinished());
            })
    }



}