import { userConstants } from '../constants'

export function category(state={}, action) {
    switch(action.type) {
        case userConstants.CATEGORY_GET_REQUEST:
            return {}
        case userConstants.CATEGORY_GET_SUCCESS:
            return Object.assign({}, state, {
                categories: action.categories
            })
        // case userConstants.COURSE_GET_FAILURE:
        //     return {}

        // case userConstants.COURSE_EDIT_REQUEST:
        //     return {}
        // case userConstants.COURSE_EDIT_SUCCESS:
        //     return Object.assign({}, state, {
        //         course: action.course,
        //         courses: action.courses
        //     })
        // case userConstants.COURSE_UPDATE_REQUEST:
        //     return {}
        // case userConstants.COURSE_UPDATE_SUCCESS:
        //     return {}

        // case userConstants.COURSE_DELETE_REQUEST:
        //     return {}
        // case userConstants.COURSE_DELETE_SUCCESS:
        //     return {}

        // case userConstants.COURSE_ADD_REQUEST:
        //     return {}
        // case userConstants.COURSE_ADD_SUCCESS:
        //     return {}

        default:
            return state
    }
}