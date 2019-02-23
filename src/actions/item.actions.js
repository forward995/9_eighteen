import { itemConstants } from '../constants'
import { itemService } from '../services'

export const itemActions = {
    itemAdd,
    itemUpdate,
    itemEdit,
    itemGet,
    itemDelete
}

function itemAdd(item) {
    return dispatch => {
        dispatch(request(item));
        itemService.itemAdd(item)
            .then(
                item => {
                    dispatch(success(item))
                },
                error => {
                    console.log('error')
                }
            )
    }
    function request(item) {
        return {
            type: itemConstants.ITEM_ADD_REQUEST,
            item
        }
    }
    function success(item) {
        return {
            type: itemConstants.ITEM_ADD_SUCCESS,
            item
        }
    }
}

function itemUpdate(item) {
    return dispatch => {
        dispatch(request(item))
        itemService.itemUpdate(item)
            .then(
                item => {
                    dispatch(success(item))
                },
                error => {
                    console.log('error')
                }
            )
    }
    function request(item) {
        return {
            type: itemConstants.ITEM_UPDATE_REQUEST,
            item
        }
    }
    function success(item) {
        return {
            type: itemConstants.ITEM_UPDATE_SUCCESS,
            item
        }
    }
}

function itemEdit(id) {
    return dispatch => {
        dispatch(request(id))
        itemService.itemEdit(id)
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
            type: itemConstants.ITEM_EDIT_REQUEST,
            id
        }
    }
    function success(id) {
        return {
            type: itemConstants.ITEM_EDIT_SUCCESS,
            id
        }
    }
}

function itemGet() {
    return dispatch => {
        dispatch(request())
        itemService.itemGet()
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
            type: itemConstants.ITEM_GET_REQUEST
        }
    }
    function success() {
        return {
            type: itemConstants.ITEM_GET_SUCCESS
        }
    }
}

function itemDelete(id) {
    return dispatch => {
        dispatch(request(id))
        itemService.itemDelete(id)
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
            type: itemConstants.ITEM_DELETE_REQUEST,
            id
        }
    }
    function success(id) {
        return {
            type: itemConstants.ITEM_DELETE_SUCCESS,
            id
        }
    }
}