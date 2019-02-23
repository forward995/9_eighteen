import { menuConstants } from '../constants'
import { menuService } from '../services'

export const menuActions = {
    menuAdd,
    menuUpdate,
    menuEdit,
    menuGet,
    menuDelete
}

function menuAdd(menu) {
    return dispatch => {
        dispatch(request(menu));
        menuService.itemAdd(menu)
            .then(
                menu => {
                    dispatch(success(menu))
                },
                error => {
                    console.log('error')
                }
            )
    }
    function request(menu) {
        return {
            type: menuConstants.MENU_ADD_REQUEST,
            menu
        }
    }
    function success(menu) {
        return {
            type: menuConstants.MENU_ADD_SUCCESS,
            menu
        }
    }
}

function menuUpdate(menu) {
    return dispatch => {
        dispatch(request(menu))
        menuService.itemUpdate(menu)
            .then(
                menu => {
                    dispatch(success(menu))
                },
                error => {
                    console.log('error')
                }
            )
    }
    function request(menu) {
        return {
            type: menuConstants.MENU_UPDATE_REQUEST,
            menu
        }
    }
    function success(menu) {
        return {
            type: menuConstants.MENU_UPDATE_SUCCESS,
            menu
        }
    }
}

function menuEdit(id) {
    return dispatch => {
        dispatch(request(id))
        menuService.menuEdit(id)
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
            type: menuConstants.MENU_EDIT_REQUEST,
            id
        }
    }
    function success(id) {
        return {
            type: menuConstants.MENU_EDIT_SUCCESS,
            id
        }
    }
}

function menuGet() {
    return dispatch => {
        dispatch(request())
        menuService.menuGet()
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
            type: menuConstants.MENU_GET_REQUEST
        }
    }
    function success() {
        return {
            type: menuConstants.MENU_GET_SUCCESS
        }
    }
}

function menuDelete(id) {
    return dispatch => {
        dispatch(request(id))
        menuService.menuDelete(id)
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
            type: menuConstants.MENU_DELETE_REQUEST,
            id
        }
    }
    function success(id) {
        return {
            type: menuConstants.MENU_DELETE_SUCCESS,
            id
        }
    }
}