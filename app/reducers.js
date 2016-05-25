import { combineReducers } from 'redux'
import { LOGIN_SUCCESS,
         GET_USERS_SUCCESS,
         ADD_EVENT_SUCCESS,
         GET_SIGNINS_SUCCESS,
         GET_EVENTS_SUCCESS,
         REGISTER_SUCCESS,
         RESET_ERROR_MESSAGE,
         GET_USER_SUCCESS
} from './actions'

export function users(state = [], action) {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return action.payload.users
        default:
            return state
    }
}

export function signins(state = [], action) {
    switch (action.type) {
        case GET_SIGNINS_SUCCESS:
            return action.payload.signins
        default:
            return state
    }
}

export function events(state = [], action) {
    switch (action.type) {
        case GET_EVENTS_SUCCESS:
            return action.payload.events
        case ADD_EVENT_SUCCESS:
            return state.concat([action.payload.event])
        default:
            return state
    }
}

export function getuser(state = [], action) {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return action.payload.signins
        default:
            return state
    }
}

export function user(state = localStorage.getItem('token') ? {token: localStorage.getItem('token')} : null, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {...state, token: action.payload.token}
        default:
            return state
    }
}

export function error(state = null, action) {
    if (action.type == RESET_ERROR_MESSAGE) {
        return null
    } else if (action.error) {
        return action.payload.message
    } else {
        return state
    }
}
