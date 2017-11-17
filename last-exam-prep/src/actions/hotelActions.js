import { CREATE_HOTEL, FETCH_HOTELS } from '../actions/actionTypes';
import { createHotel, fetchHotels } from '../api/remote';


function createHotelSuccess(data) {
    return {
        type: CREATE_HOTEL,
        data
    };
}

function fetchHotelsSuccess(hotels) {
    return {
        type: FETCH_HOTELS,
        hotels
    };
}

function createHotelAction(hotel) {
    return (dispatch) => {
        return createHotel(hotel)
            .then(json => {
                console.log(json);
                if (json.success) {
                    dispatch(createHotelSuccess(hotel));
                }
            });
    };
}

function fetchHotelsAction() {
    return (dispatch) => {
        return fetchHotels()
            .then(json => {
                dispatch(fetchHotelsSuccess(json));
            });
    };
}


export { createHotelAction, fetchHotelsAction };



