import { userConstants } from '../constants'
import { courseService } from '../services/course.services'

export const courseActions = {
    courseGet,
    courseEdit,
    courseUpdate,
    courseDelete,
    courseAdd
}

function courseGet() {
    return dispatch => {
        dispatch(request())
        console.log('get')
        courseService.courseGet()
            .then(
                (courses) => {
                    console.log(courses)
                dispatch(success(courses)) 
            },
                error => {
                    console.log(error)
                }
            )
    }
    function request() {
        return {
            type: userConstants.COURSE_GET_REQUEST
        }
    }
    function success(courses) {
        return {
            type: userConstants.COURSE_GET_SUCCESS,
            courses
        }
    }
}
function courseEdit(id) {
    return dispatch => {
        dispatch(request(id))
        console.log("edit")
        courseService.courseEdit(id)
            .then(
                (course) => {
                    dispatch(success(course))
                },
                error => {
                    console.log(error)
                }
            )
    }
    function request(id) {
        return {
            type: userConstants.COURSE_EDIT_REQUEST,
            id
        }
    }
    function success(course) {
        return {
            type: userConstants.COURSE_EDIT_SUCCESS,
            course
        }
    }
}

function courseUpdate(course) {
    return dispatch => {
        console.log("update")
        dispatch(request(course.id))
        courseService.courseUpdate(course)
            .then(
                () => {
                    dispatch(success())
                },
                error => {
                    console.log(error)
                }
            )
    }
    function request(id) {
        return {
            type: userConstants.COURSE_UPDATE_REQUEST,
            id
        }
    }
    function success() {
        return {
            type: userConstants.COURSE_UPDATE_SUCCESS
        }
    }
}

function courseDelete(id) {
    return dispatch => {
        dispatch(request(id))
        console.log("delete")
        courseService.courseDelete(id)
            .then(
                () => {
                    dispatch(success())
                },
                error => {
                    console.log(error)
                }
            )
    }
    function request(id) {
        return {
            type: userConstants.COURSE_DELETE_REQUEST,
            id
        }
    }
    function success() {
        return {
            type: userConstants.COURSE_DELETE_SUCCESS
        }
    }
}

function courseAdd(course) {
    return dispatch => {
        dispatch(request(course))
        console.log("add")
        courseService.courseAdd(course)
            .then(
                () => {
                    dispatch(success())
                },
                error => {
                    console.log(error)
                }
            )
    }
    function request(course) {
        return {
            type: userConstants.COURSE_ADD_REQUEST,
            course
        }
    }
    function success() {
        return {
            type: userConstants.COURSE_ADD_SUCCESS
        }
    }
}
