const host = 'http://localhost:5000/';

async function register(name, email, password) {
    const res = await fetch(host + 'auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });
    return await res.json();
}

async function login(email, password) {

    const res = await fetch(host + 'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    return await res.json();
}

async function createHotel(hotel) {
    const res = await fetch(host + 'hotels/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        },
        body: JSON.stringify(hotel)
    });
    return await res.json();
}

async function fetchHotels() {
    const res = await fetch(host + 'hotels/all');
    return await res.json();
}

async function fetchHotelById(hotelId) {

    const res = await fetch(host + 'hotels/details/' + hotelId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        }
    });
    return await res.json();
}

async function createReview(id, review) {
    const res = await fetch(host + `hotels/details/${id}/reviews/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        },
        body: JSON.stringify(review)
    });
    return await res.json();
}

async function fetchHotelReviews(id) {

    const res = await fetch(host + `hotels/details/${id}/reviews`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        }
    });
    return await res.json();
}


export { register, login, createHotel, fetchHotels, fetchHotelById, createReview, fetchHotelReviews };