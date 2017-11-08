const appKey = 'kid_HkGx9W00W';
const appSecret = 'c9f5c3d550804da48b90f0a02eb789d1';
const hostUrl = 'https://baas.kinvey.com';


const requestHandler = {
    login: (payload) => {
        return fetch(`${hostUrl}/user/${appKey}/login`, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(`${appKey}:${appSecret}`),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                return response.json();
            })
    },
    register: (payload) => {
        return fetch(`${hostUrl}/user/${appKey}`, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(`${appKey}:${appSecret}`),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                return response.json();
            })

    },
    pullPosts: (authToken) => {
        return fetch(`${hostUrl}/appdata/${appKey}/posts?query={}&sort={"_kmd.ect": -1}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('token')
            },
        })
            .then(response => {
                return response.json();
            })
    },
    createPost: (payload) => {
        return fetch(`${hostUrl}/appdata/${appKey}/posts`, {
            method: 'POST',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                return response.json();
            })

    }
}

export default requestHandler;