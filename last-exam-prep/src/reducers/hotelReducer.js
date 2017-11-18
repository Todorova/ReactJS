import { CREATE_HOTEL, FETCH_HOTELS, FETCH_HOTEL_BY_ID, CREATE_REVIEW, FETCH_HOTEL_REVIEWS } from '../actions/actionTypes';

export default function hotelReducer(hotelState = { hotels: [], focusHotel: {}, reviews: [], focusReviews: [] }, action) {
    switch (action.type) {
        case CREATE_HOTEL:
            let hotel = action.data;
            let newHotels = [...hotelState.hotels, { index: hotelState.hotels.length, value: hotel }];
            return Object.assign({}, hotelState, {
                hotels: newHotels,
                focusHotel: hotelState.focusHotel,
                reviews: hotelState.reviews,
                focusReviews: hotelState.focusReviews
            })
        case CREATE_REVIEW:
            let review = action.data;
            let newReviews = [...hotelState.reviews, { index: hotelState.reviews.length, value: review }];
            return Object.assign({}, hotelState, {
                hotels: hotelState.hotels,
                focusHotel: hotelState.focusHotel,
                reviews: newReviews,
                focusReviews: hotelState.focusReviews
            })
        case FETCH_HOTEL_BY_ID:
            let newState = {
                ...hotelState,
                hotels: hotelState.hotels,
                focusHotel: action.hotel,
                reviews: hotelState.reviews,
                focusReviews: hotelState.focusReviews
            };
            return newState;
        case FETCH_HOTELS:
            return Object.assign({}, hotelState, {
                hotels: action.data,
                focusHotel: hotelState.focusHotel,
                reviews: hotelState.reviews,
                focusReviews: hotelState.focusReviews
            })
        case FETCH_HOTEL_REVIEWS:
            return Object.assign({}, hotelState, {
                hotels: action.data,
                focusHotel: hotelState.focusHotel,
                reviews: hotelState.reviews,
                focusReviews: action.data
            })
        default:
            return hotelState;
    }
}