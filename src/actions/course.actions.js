import { userConstants } from '../constants'
import { courseService } from '../services/course.services'

export const courseActions = {
    courseGet,
    courseEdit
}

function courseGet() {
    return dispatch => {
        dispatch(request())
        console.log('here')
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