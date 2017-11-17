import { CREATE_HOTEL, FETCH_HOTELS } from '../actions/actionTypes';

export default function hotelReducer(state = [], action) {
    switch (action.type) {
        case CREATE_HOTEL:
            let hotel = action.data;
            return [...state, hotel];
        case FETCH_HOTELS:
            console.log(action.hotels)
            return reconcile(state, action.hotels);
        default:
            return state;
    }
}

function reconcile(oldData, newData) {
    const newDataById = {};

    for (let entry of newData) {
        newDataById[entry.id] = entry;
    }

    const result = [];

    for (let entry of oldData) {
        if (newDataById[entry.id]) {
            result.push(newDataById[entry.id]);
            delete newDataById[entry.id];
        } else {
            result.push(entry);
        }
    }

    for (let id in newDataById) {
        result.push(newDataById[id]);
    }

    result.sort((a, b) => a.id - b.id);

    return result;
}