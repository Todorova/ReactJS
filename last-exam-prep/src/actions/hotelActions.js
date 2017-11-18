import { CREATE_HOTEL, FETCH_HOTELS, FETCH_HOTEL_BY_ID, CREATE_REVIEW, FETCH_HOTEL_REVIEWS } 
from '../actions/actionTypes';
import { createHotel, fetchHotels, fetchHotelById, createReview, fetchHotelReviews } from '../api/remote';

function createHotelSuccess(data) {
    return {
        type: CREATE_HOTEL,
        data
    };
}

function fetchHotelReviewsSuccess(data){
    return {
        type: FETCH_HOTEL_REVIEWS,
        data
    };
}

function createReviewSuccess(data) {
    return {
        type: CREATE_REVIEW,
        data
    };
}

function fetchHotelsSuccess(data) {
    return {
        type: FETCH_HOTELS,
        data
    };
}

function fetchHotelByIdSuccess(hotel) {
    return {
        type: FETCH_HOTEL_BY_ID,
        hotel
    };
}

function createHotelAction(hotel) {
    return (dispatch) => {
        return createHotel(hotel)
            .then(json => {
                if (json.success) {
                    dispatch(createHotelSuccess(hotel));
                }
            });
    };
}

function createReviewAction(id, review) {
    return (dispatch) => {
        return createReview(id, review)
            .then(json => {
                console.log(json)
                dispatch(createReviewSuccess(json.review));
            })
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

function fetchHotelByIdAction(id) {
    return (dispatch) => {
        return fetchHotelById(id)
            .then(json => {
                dispatch(fetchHotelByIdSuccess(json));
            }).catch(e => {
                throw e;
            });
    };
}

function fetchHotelReviewsAction(id) {
    return (dispatch) => {
        return fetchHotelReviews(id)
            .then(json => {
                dispatch(fetchHotelReviewsSuccess(json));
            }).catch(e => {
                throw e;
            });
    };
}


export { createHotelAction, fetchHotelsAction, fetchHotelByIdAction, createReviewAction, fetchHotelReviewsAction };



