import { browserHistory } from 'react-router'
import 'whatwg-fetch'

const url = 'http://helloworldapi.nickendo.com'

function processStatus(response) {
    if (response.status.toString().indexOf('2') == 0) {
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

function DELETE(endpoint, token) {
    return fetch(url + endpoint, {
        method: 'DELETE',
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
    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    if (token) {
        headers['Authorization'] = token
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

export function addEvent(token, data) {
    return POST('/events', data, token)
}

export function Users(token) {
    return GET('/users', token)
}

export function getUser(token, id) {
    return GET('/users/' + id, token)
}

export function getSignins(token) {
    return GET('/signins', token)
}

export function getEvents(token) {
    return GET('/events', token)
}

export function deleteEvent(token, id) {
    return DELETE('/events/' + id, token)
}

export function verifySchedule(token,id){
    return POST('/users/'+id,'null',token)
}
