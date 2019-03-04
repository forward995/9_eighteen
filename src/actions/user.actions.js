import { userConstants } from '../constants'
import { userService } from '../services'
import { history } from '../history'

export const userActions = {
    signin,
    signup,
    signout,
    updateUser
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

function updateUser(user) {
    return dispatch => {
        console.log("update")
        dispatch(request(user._id))
        userService.updateUser(user)
            .then(
                (user) => {
                    dispatch(success(user))
                    history.push('/')
                },
                error => {
                    console.log(error)
                }
            )
    }
    function request(id) {
        return {
            type: userConstants.ITEM_UPDATE_REQUEST,
            id
        }
    }
    function success(user) {
        return {
            type: userConstants.ITEM_UPDATE_SUCCESS,
            user
        }
    }
}