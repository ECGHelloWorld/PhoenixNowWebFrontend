import { getSignins as APIgetSignins,
         Login as APILogin,
         Users as APIUsers,
         Register as APIRegister,
         getEvents as APIgetEvents,
         getUser as APIgetUser,
         addEvent as APIaddEvent,
         deleteEvent as APIdeleteEvent,
         loginRedirect,
         verifySchedule as APIverifySchedule
} from './api'

export const DELETE_EVENT = 'DELETE_EVENT'
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS'
export const DELETE_EVENT_ERROR = 'DELETE_ERROR'
export const ADD_EVENT = 'ADD_EVENT'
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS'
export const ADD_EVENT_ERROR = 'ADD_EVENT_ERROR'
export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const REGISTER = 'REGISTER'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'
export const GET_SIGNINS = 'GET_SIGNINS'
export const GET_SIGNINS_SUCCESS = 'GET_SIGNINS_SUCCESS'
export const GET_SIGNINS_ERROR = 'GET_SIGNINS_ERROR'
export const GET_EVENTS = 'GET_EVENTS'
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS'
export const GET_EVENTS_ERROR = 'GET_EVENTS_ERROR'
export const GET_USER = 'GET_USER'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_ERROR = 'GET_USER_ERROR'
export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'
export const VERIFY_SCHEDULE_ERROR='VERIFY_SCHEDULE_ERROR'
export const VERIFY_SCHEDULE='VERIFY_SCHEDULE'
export const VERIFY_SCHEDULE_SUCCESS='VERIFY_SCHEDULE_SUCCESS'

export function resetErrorMessage() {
    return {
        type: RESET_ERROR_MESSAGE
    }
}

export function register(user) {
    return dispatch => {
        return dispatch({
            type: REGISTER,
            payload: APIRegister(user)
        }).then(({ action }) => {
            localStorage.setItem('token', action.payload.token)
        })
    }
}

export function login(user) {
    return dispatch => {
        return dispatch({
            type: LOGIN,
            payload: APILogin(user)
        }).then(({ action }) => {
            localStorage.setItem('token', action.payload.token)
        })
    }
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('token')
        dispatch({type: 'RESET'})
    }
}

export function getSignins(token) {
    return {
        type: GET_SIGNINS,
        payload: APIgetSignins(token)
    }
}

export function deleteEvent(token, id) {
    return dispatch => {
        dispatch({
            type: DELETE_EVENT,
            payload: APIdeleteEvent(token, id)
        })
        dispatch(getEvents(token))
    }
}

export function getUser(token, id) {
    return {
        type: GET_USER,
        payload: APIgetUser(token, id)
    }
}

export function getEvents(token) {
    return {
        type: GET_EVENTS,
        payload: APIgetEvents(token)
    }
}

export function addEvent(token, event) {
    return {
        type: ADD_EVENT,
        payload: APIaddEvent(token, event)
    }
}

export function getUsers(token) {
    return {
        type: GET_USERS,
        payload: APIUsers(token)
    }
}

export function verifySchedule(token,id){
  return{
    type: VERIFY_SCHEDULE,
    payload: APIverifySchedule(token,id)
  }
}
