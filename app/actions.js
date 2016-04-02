import { getEvents as APIgetEvents,
         Login as APILogin,
         Users as APIUsers,
         Register as APIRegister,
         loginRedirect
} from './api'

export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const REGISTER = 'REGISTER'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'
export const GET_EVENTS = 'GET_EVENTS'
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS'
export const GET_EVENTS_ERROR = 'GET_EVENTS_ERROR'
export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

export function resetErrorMessage() {
    return {
        type: RESET_ERROR_MESSAGE
    }
}
//export function login(user) {
//    return dispatch => {
//        return dispatch({
//            type: LOGIN,
//            payload: APILogin(user)
//        }).then(loginRedirect)
//    }
//}
//
//export function register(user) {
//    return dispatch => {
//        return dispatch({
//            type: REGISTER,
//            payload: APIRegister(user)
//        }).then(loginRedirect)
//    }
//}

export function register(user) {
    return {
        type: REGISTER,
        payload: APIRegister(user)
    }
}

export function login(user) {
    return {
        type: LOGIN,
        payload: APILogin(user)
    }
}

export function getEvents(token) {
    return {
        type: GET_EVENTS,
        payload: APIgetEvents(token)
    }
}

export function getUsers(token) {
    return {
        type: GET_USERS,
        payload: APIUsers(token)
    }
}
