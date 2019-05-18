import { userConstants } from '../constants'

export function registration(state={}, action) {
    switch(action.type) {
        case userConstants.SIGNUP_REQUEST:
            return {
                registering: true
            }
        case userConstants.SIGNUP_SUCCESS:
            return {}
        case userConstants.SIGNUP_FAILURE:
            return {}
        case userConstants.USER_UPDATE_REQUEST:
            return {
                
            }
        case userConstants.USER_UPDATE_SUCCESS:
            return Object.assign({}, state, {
                user: action.user
            })
            
        default:
            return state
    }
}