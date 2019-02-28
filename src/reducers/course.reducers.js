import { userConstants } from '../constants'

export function course(state={}, action) {
    switch(action.type) {
        case userConstants.COURSE_GET_REQUEST:
            return {}
        case userConstants.COURSE_GET_SUCCESS:
            return Object.assign({}, state, {
                courses: action.courses
            })
        case userConstants.COURSE_GET_FAILURE:
            return {}

        case userConstants.COURSE_EDIT_REQUEST:
            return {}
        case userConstants.COURSE_EDIT_SUCCESS:
            return Object.assign({}, state, {
                course: action.course
            })
        default:
            return state
    }
}