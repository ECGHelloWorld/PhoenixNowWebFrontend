import { getSignins as APIgetSignins,
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
export const GET_SIGNINS = 'GET_SIGNINS'
export const GET_SIGNINS_SUCCESS = 'GET_SIGNINS_SUCCESS'
export const GET_SIGNINS_ERROR = 'GET_SIGNINS_ERROR'
export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

export function resetErrorMessage() {
    return {
        type: RESET_ERROR_MESSAGE
    }
}

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

export function getSignins(token) {
    return {
        type: GET_SIGNINS,
        payload: APIgetSignins(token)
    }
}

export function getUsers(token) {
    return {
        type: GET_USERS,
        payload: APIUsers(token)
    }
}
