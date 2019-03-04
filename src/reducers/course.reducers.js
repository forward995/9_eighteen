import { userConstants } from '../constants'
let initialState = {
    activeCourse: null
}
export function course(state=initialState, action) {
    switch(action.type) {
        case userConstants.COURSE_GET_REQUEST:
            return {}
        case userConstants.COURSE_GET_SUCCESS:
            let active
            if(action.courses && action.courses.length > 0) 
                active = action.courses[0]
            else active = null
            return Object.assign({}, state, {
                courses: action.courses,
                activeCourse: active
            })
        case userConstants.COURSE_GET_FAILURE:
            return {}

        case userConstants.COURSE_EDIT_REQUEST:
            return {}
        case userConstants.COURSE_EDIT_SUCCESS:
            return Object.assign({}, state, {
                course: action.course
            })
        case userConstants.COURSE_UPDATE_REQUEST:
            return {}
        case userConstants.COURSE_UPDATE_SUCCESS:
            return Object.assign({}, state, {
                course: action.course
            })
        case userConstants.COURSE_DELETE_REQUEST:
            return {}
        case userConstants.COURSE_DELETE_SUCCESS:
            return {}

        case userConstants.COURSE_ADD_REQUEST:
            return {}
        case userConstants.COURSE_ADD_SUCCESS:
            return Object.assign({}, state, {
                course: action.course
            })
        default:
            return state
    }
}