import { userConstants } from '../constants'
import { subCategoryService } from '../services/subCategory.services'
import {history} from '../history'
export const subCategoryActions = {
    subCategoryGet,
    // categoryEdit,
    // categoryUpdate,
    // categoryDelete,
    subCategoryAdd
}

function subCategoryGet(id) {
    return dispatch => {
        dispatch(request(id))
        console.log('get')
        subCategoryService.subCategoryGet(id)
            .then(
                (subCategories) => {
                    console.log(subCategories)
                dispatch(success(subCategories)) 
            },
                error => {
                    console.log(error)
                }
            )
    }
    function request(id) {
        return {
            type: userConstants.SUBCATEGORY_GET_REQUEST,
            id
        }
    }
    function success(subCategories) {
        return {
            type: userConstants.SUBCATEGORY_GET_SUCCESS,
            subCategories
        }
    }
}
// function categoryEdit(id) {
//     return dispatch => {
//         dispatch(request(id))
//         console.log("edit")
//         categoryService.categoryEdit(id)
//             .then(
//                 (category) => {
//                     dispatch(success(category))
//                 },
//                 error => {
//                     console.log(error)
//                 }
//             )
//     }
//     function request(id) {
//         return {
//             type: userConstants.CATEGORY_EDIT_REQUEST,
//             id
//         }
//     }
//     function success(category) {
//         return {
//             type: userConstants.CATEGORY_EDIT_SUCCESS,
//             category
//         }
//     }
// }

// function categoryUpdate(category) {
//     return dispatch => {
//         console.log("update")
//         dispatch(request(category.id))
//         categoryService.categoryUpdate(category)
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
//             type: userConstants.CATEGORY_UPDATE_REQUEST,
//             id
//         }
//     }
//     function success() {
//         return {
//             type: userConstants.CATEGORY_UPDATE_SUCCESS
//         }
//     }
// }

// function categoryDelete(id) {
//     return dispatch => {
//         dispatch(request(id))
//         console.log("delete")
//         categoryService.categoryDelete(id)
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
//             type: userConstants.CATEGORY_DELETE_REQUEST,
//             id
//         }
//     }
//     function success() {
//         return {
//             type: userConstants.CATEGORY_DELETE_SUCCESS
//         }
//     }
// }

function subCategoryAdd(subCategory) {
    return dispatch => {
        dispatch(request(subCategory))
        console.log("add")
        subCategoryService.subCategoryAdd(subCategory)
            .then(
                (subCategory) => {
                    dispatch(success(subCategory))
                    history.push('/home#');
                },
                error => {
                    console.log(error)
                }
            )
    }
    function request(subCategory) {
        return {
            type: userConstants.SUBCATEGORY_ADD_REQUEST,
            subCategory
        }
    }
    function success(subCategory) {
        return {
            type: userConstants.SUBCATEGORY_ADD_SUCCESS,
            subCategory
        }
    }
}
