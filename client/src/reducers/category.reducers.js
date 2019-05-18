import { userConstants } from '../constants'

let initialState = {
    activeCategory: null
}
export function category(state=initialState, action) {
    switch(action.type) {
        case userConstants.CATEGORY_GET_REQUEST:
            return {}
        case userConstants.CATEGORY_GET_SUCCESS:
            let active
            if(action.categories && action.categories.length > 0) active = action.categories[0]
            else active = null
            return Object.assign({}, state, {
                categories: action.categories,
                activeCategory: active
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