import { categoryConstants } from '../constants'
import { categoryService } from '../services'

export const categoryActions = {
    categoryAdd,
    categoryUpdate,
    categoryEdit,
    categoryGet,
    categoryDelete
}

function categoryAdd(category) {
    return dispatch => {
        dispatch(request(category));
        categoryService.itemAdd(category)
            .then(
                category => {
                    dispatch(success(category))
                },
                error => {
                    console.log('error')
                }
            )
    }
    function request(category) {
        return {
            type: categoryConstants.CATEGORY_ADD_REQUEST,
            category
        }
    }
    function success(category) {
        return {
            type: categoryConstants.CATEGORY_ADD_SUCCESS,
            category
        }
    }
}

function categoryUpdate(category) {
    return dispatch => {
        dispatch(request(category))
        categoryService.categoryUpdate(category)
            .then(
                category => {
                    dispatch(success(category))
                },
                error => {
                    console.log('error')
                }
            )
    }
    function request(category) {
        return {
            type: categoryConstants.CATEGORY_UPDATE_REQUEST,
            category
        }
    }
    function success(category) {
        return {
            type: categoryConstants.CATEGORY_UPDATE_SUCCESS,
            category
        }
    }
}

function categoryEdit(id) {
    return dispatch => {
        dispatch(request(id))
        categoryService.categoryEdit(id)
            .then(
                id => {
                    dispatch(success(id))
                },
                error => {
                    console.log('error')
                }
            )
    }
    function request(id) {
        return {
            type: categoryConstants.CATEGORY_EDIT_REQUEST,
            id
        }
    }
    function success(id) {
        return {
            type: categoryConstants.CATEGORY_EDIT_SUCCESS,
            id
        }
    }
}

function categoryGet() {
    return dispatch => {
        dispatch(request())
        categoryService.categoryGet()
            .then(
                () => {
                dispatch(success()) 
            },
                error => {
                    console.log('error')
                }
            )
    }
    function request() {
        return {
            type: categoryConstants.CATEGORY_GET_REQUEST
        }
    }
    function success() {
        return {
            type: categoryConstants.CATEGORY_GET_SUCCESS
        }
    }
}

function categoryDelete(id) {
    return dispatch => {
        dispatch(request(id))
        categoryService.categoryDelete(id)
            .then(
                id => {
                    dispatch(success(id))
                },
                error => {
                    console.log('error')
                }
            )
    }
    function request(id) {
        return {
            type: categoryConstants.CATEGORY_DELETE_REQUEST,
            id
        }
    }
    function success(id) {
        return {
            type: categoryConstants.CATEGORY_DELETE_SUCCESS,
            id
        }
    }
}