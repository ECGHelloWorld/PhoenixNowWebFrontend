import { combineReducers } from 'redux'
import { LOGIN_SUCCESS,
         GET_USERS_SUCCESS,
         GET_SIGNINS_SUCCESS,
         REGISTER_SUCCESS,
         RESET_ERROR_MESSAGE
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
    console.log(action)
    switch (action.type) {
        case GET_SIGNINS_SUCCESS:
            return action.payload.signins
        default:
            return state
    }
}

export function user(state = null, action) {
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
