import { browserHistory } from 'react-router'

const url = 'http://helloworldapi.nickendo.com'

function processStatus(response) {
    if (response.status === 200) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

function getToken(response) {
    return response.headers.get('Authorization')
}

function parseJSON(response) {
    return response.json()
}

export function loginRedirect(response) {
    browserHistory.push('/users')
}

function GET(endpoint, token) {
    return fetch(url + endpoint, {
        method: 'GET',
        headers: {
            'Authorization': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    })
    .then(processStatus)
    .then(parseJSON)
}

function POST(endpoint, data, token) {
    var headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })
    if (token) {
        headers.append('Authorization', token)
    }
    return fetch(url + endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
        mode: 'cors'
    })
    .then(processStatus)
    .then(parseJSON)
}

export function Register(data) {
    return POST('/register', data)
}

export function Login(data) {
    return POST('/login', data)
}

export function Users(token) {
    return GET('/users', token)
}

export function getEvents(token) {
    return GET('/events', token)
}
