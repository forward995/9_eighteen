import { userConstants } from '../constants'
import { courseService } from '../services/course.services'
import {history} from '../history'
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
        // console.log('get')
        courseService.courseGet()
            .then(
                (courses) => {
                    console.log(courses)
                dispatch(success(courses)) 
                history.push('/home')
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
        // console.log("edit")
        courseService.courseEdit(id)
            .then(
                (course) => {
                    dispatch(success(course))
                    history.push('/home')
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
        // console.log("update")
        dispatch(request(course.id))
        courseService.courseUpdate(course)
            .then(
                (course) => {
                    dispatch(success(course))
                    history.push('/home')
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
    function success(course) {
        return {
            type: userConstants.COURSE_UPDATE_SUCCESS,
            course
        }
    }
}

function courseDelete(id) {
    return dispatch => {
        dispatch(request(id))
        // console.log("delete")
        courseService.courseDelete(id)
            .then(
                (courses) => {
                    dispatch(success(courses))
                    history.push('/home')
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
    function success(courses) {
        return {
            type: userConstants.COURSE_DELETE_SUCCESS,
            courses
        }
    }
}

function courseAdd(course) {
    return dispatch => {
        dispatch(request(course))
        courseService.courseAdd(course)
            .then(
                (course, courses) => {
                    dispatch(success(course, courses))
                    history.push('/home')
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
    function success(course, courses) {
        return {
            type: userConstants.COURSE_ADD_SUCCESS,
            course,
            courses
        }
    }
}
