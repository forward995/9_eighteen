import { userConstants } from '../constants'
import { itemService } from '../services/item.services'
import {history} from '../history'
export const itemActions = {
    itemGet,
    itemEdit,
    itemUpdate,
    itemDelete,
    itemAdd
}

function itemGet(id) {
    return dispatch => {
        dispatch(request(id))
        console.log('get')
        itemService.itemGet(id)
            .then(
                (items) => {
                    console.log(items)
                dispatch(success(items)) 
                history.push('/home')
            },
                error => {
                    console.log(error)
                }
            )
    }
    function request(id) {
        return {
            type: userConstants.ITEM_GET_REQUEST,
            id
        }
    }
    function success(items) {
        return {
            type: userConstants.ITEM_GET_SUCCESS,
            items
        }
    }
}
function itemEdit(id) {
    return dispatch => {
        dispatch(request(id))
        console.log("edit")
        itemService.itemEdit(id)
            .then(
                (item) => {
                    dispatch(success(item))
                    history.push('/home')
                },
                error => {
                    console.log(error)
                }
            )
    }
    function request(id) {
        return {
            type: userConstants.ITEM_EDIT_REQUEST,
            id
        }
    }
    function success(item) {
        return {
            type: userConstants.ITEM_EDIT_SUCCESS,
            item
        }
    }
}

function itemUpdate(item) {
    return dispatch => {
        console.log("update")
        dispatch(request(item.itemId))
        itemService.itemUpdate(item)
            .then(
                () => {
                    dispatch(success())
                    history.push('/home')
                },
                error => {
                    console.log(error)
                }
            )
    }
    function request(id) {
        return {
            type: userConstants.ITEM_UPDATE_REQUEST,
            id
        }
    }
    function success() {
        return {
            type: userConstants.ITEM_UPDATE_SUCCESS
        }
    }
}

function itemDelete(id) {
    return dispatch => {
        dispatch(request(id))
        console.log("delete")
        itemService.itemDelete(id)
            .then(
                () => {
                    dispatch(success())
                    history.push('/home')
                },
                error => {
                    console.log(error)
                }
            )
    }
    function request(id) {
        return {
            type: userConstants.ITEM_DELETE_REQUEST,
            id
        }
    }
    function success() {
        return {
            type: userConstants.ITEM_DELETE_SUCCESS
        }
    }
}

function itemAdd(item) {
    return dispatch => {
        dispatch(request(item))
        console.log("add")
        itemService.itemAdd(item)
            .then(
                (item) => {
                    dispatch(success(item))
                    history.push('/home#');
                },
                error => {
                    console.log(error)
                }
            )
    }
    function request(item) {
        return {
            type: userConstants.ITEM_ADD_REQUEST,
            item
        }
    }
    function success(item) {
        return {
            type: userConstants.ITEM_ADD_SUCCESS,
            item
        }
    }
}
