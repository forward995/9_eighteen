import { userConstants } from '../constants'

const initialState = {
    categories:[]
}
export function category(state=initialState, action) {
    switch(action.type) {
        case userConstants.CATEGORY_GET_REQUEST:
            return {}
        case userConstants.CATEGORY_GET_SUCCESS:
            return Object.assign({}, state, {
                categories: action.categories
            })
        case userConstants.CATEGORY_GET_FAILURE:
            return {}

        case userConstants.CATEGORY_EDIT_REQUEST:
            return {}
        case userConstants.CATEGORY_EDIT_SUCCESS:
            return Object.assign({}, state, {
                category: action.category
            })
        case userConstants.CATEGORY_UPDATE_REQUEST:
            return {}
        case userConstants.CATEGORY_UPDATE_SUCCESS:
            return {}

        case userConstants.CATEGORY_DELETE_REQUEST:
            return {}
        case userConstants.CATEGORY_DELETE_SUCCESS:
            return {}

        case userConstants.CATEGORY_ADD_REQUEST:
            return {}
        case userConstants.CATEGORY_ADD_SUCCESS:
            return {
                
            }

        default:
            return state
    }
}