import { userConstants } from '../constants'
import { subCategoryService } from '../services/subCategory.services'
import {history} from '../history'
export const subCategoryActions = {
    subCategoryGet,
    subCategoryEdit,
    subCategoryUpdate,
    subCategoryDelete,
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
function subCategoryEdit(id) {
    return dispatch => {
        dispatch(request(id))
        console.log("edit")
        subCategoryService.subCategoryEdit(id)
            .then(
                (subCategory) => {
                    dispatch(success(subCategory))
                },
                error => {
                    console.log(error)
                }
            )
    }
    function request(id) {
        return {
            type: userConstants.SUBCATEGORY_EDIT_REQUEST,
            id
        }
    }
    function success(subCategory) {
        return {
            type: userConstants.SUBCATEGORY_EDIT_SUCCESS,
            subCategory
        }
    }
}

function subCategoryUpdate(subCategory) {
    return dispatch => {
        console.log("update")
        dispatch(request(subCategory.subCategoryId))
        subCategoryService.subCategoryUpdate(subCategory)
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
            type: userConstants.SUBCATEGORY_UPDATE_REQUEST,
            id
        }
    }
    function success() {
        return {
            type: userConstants.SUBCATEGORY_UPDATE_SUCCESS
        }
    }
}

function subCategoryDelete(id) {
    return dispatch => {
        dispatch(request(id))
        console.log("delete")
        subCategoryService.subCategoryDelete(id)
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
            type: userConstants.SUBCATEGORY_DELETE_REQUEST,
            id
        }
    }
    function success() {
        return {
            type: userConstants.SUBCATEGORY_DELETE_SUCCESS
        }
    }
}

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
