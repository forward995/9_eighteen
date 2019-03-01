import { userConstants } from '../constants'
import { categoryService } from '../services/category.services'

export const categoryActions = {
    categoryGet,
    // courseEdit,
    // courseUpdate,
    // courseDelete,
    // courseAdd
}

function categoryGet(id) {
    return dispatch => {
        dispatch(request(id))
        console.log('get')
        categoryService.categoryGet(id)
            .then(
                (categories) => {
                    console.log(categories)
                dispatch(success(categories)) 
            },
                error => {
                    console.log(error)
                }
            )
    }
    function request(id) {
        return {
            type: userConstants.CATEGORY_GET_REQUEST,
            id
        }
    }
    function success(categories) {
        return {
            type: userConstants.CATEGORY_GET_SUCCESS,
            categories
        }
    }
}
// function courseEdit(id) {
//     return dispatch => {
//         dispatch(request(id))
//         console.log("edit")
//         courseService.courseEdit(id)
//             .then(
//                 (course) => {
//                     dispatch(success(course))
//                 },
//                 error => {
//                     console.log(error)
//                 }
//             )
//     }
//     function request(id) {
//         return {
//             type: userConstants.COURSE_EDIT_REQUEST,
//             id
//         }
//     }
//     function success(course) {
//         return {
//             type: userConstants.COURSE_EDIT_SUCCESS,
//             course
//         }
//     }
// }

// function courseUpdate(course) {
//     return dispatch => {
//         console.log("update")
//         dispatch(request(course.id))
//         courseService.courseUpdate(course)
//             .then(
//                 () => {
//                     dispatch(success())
//                 },
//                 error => {
//                     console.log(error)
//                 }
//             )
//     }
//     function request(id) {
//         return {
//             type: userConstants.COURSE_UPDATE_REQUEST,
//             id
//         }
//     }
//     function success() {
//         return {
//             type: userConstants.COURSE_UPDATE_SUCCESS
//         }
//     }
// }

// function courseDelete(id) {
//     return dispatch => {
//         dispatch(request(id))
//         console.log("delete")
//         courseService.courseDelete(id)
//             .then(
//                 () => {
//                     dispatch(success())
//                 },
//                 error => {
//                     console.log(error)
//                 }
//             )
//     }
//     function request(id) {
//         return {
//             type: userConstants.COURSE_DELETE_REQUEST,
//             id
//         }
//     }
//     function success() {
//         return {
//             type: userConstants.COURSE_DELETE_SUCCESS
//         }
//     }
// }

// function courseAdd(course) {
//     return dispatch => {
//         dispatch(request(course))
//         console.log("add")
//         courseService.courseAdd(course)
//             .then(
//                 () => {
//                     dispatch(success())
//                 },
//                 error => {
//                     console.log(error)
//                 }
//             )
//     }
//     function request(course) {
//         return {
//             type: userConstants.COURSE_ADD_REQUEST,
//             course
//         }
//     }
//     function success() {
//         return {
//             type: userConstants.COURSE_ADD_SUCCESS
//         }
//     }
// }
