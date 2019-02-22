import { userConstants } from '../constants'
import { userService } from '../services'
import { history } from '../history'

export const userActions = {
    signin,
    signup,
    signout
}

function signin(email, password) {
    return dispatch => {
        dispatch(request({email}));
        userService.signin(email, password)
            .then(
                user => {
                    console.log("user", user)
                    dispatch(success(user))
                    history.push('/home')
                },
                error => {
                    console.log('error')
                }
            )
    }
    function request(user) {
        return {
            type: userConstants.SIGNIN_REQUEST,
            user
        }
    }
    function success(user) {
        return {
            type: userConstants.SIGNIN_SUCCESS,
            user
        }
    }
}

function signup(user) {
    return dispatch => {
        dispatch(request(user))
        userService.signup(user)
            .then(
                user => {
                    dispatch(success())
                    history.push('/')
                    console.log('success')
                },
                error => {
                    console.log('error')
                }
            )
    }
    function request(user) {
        return {
            type: userConstants.SIGNUP_REQUEST,
            user
        }
    }
    function success() {
        return {
            type: userConstants.SIGNUP_SUCCESS,
            user
        }
    }
}

function signout() {
    userService.signout()
    return {
        type: userConstants.SIGNOUT
    };
}