import { userConstants } from '../constants'
// import { subCategoryActions } from '../actions/subCategory.actions';

// const initialState = {
//     categories:[]
// }
export function item(state={}, action) {
    switch(action.type) {
        case userConstants.ITEM_GET_REQUEST:
            return {}
        case userConstants.ITEM_GET_SUCCESS:
            return Object.assign({}, state, {
                items: action.items
            })
        // case userConstants.SUBCATEGORY_GET_FAILURE:
        //     return {}

        case userConstants.ITEM_EDIT_REQUEST:
            return {}
        case userConstants.ITEM_EDIT_SUCCESS:
            return Object.assign({}, state, {
                item: action.item
            })
        case userConstants.ITEM_UPDATE_REQUEST:
            return {}
        case userConstants.ITEM_UPDATE_SUCCESS:
            return {}

        case userConstants.ITEM_DELETE_REQUEST:
            return {}
        case userConstants.ITEM_DELETE_SUCCESS:
            return {}

        case userConstants.ITEM_ADD_REQUEST:
            return {}
        case userConstants.ITEM_ADD_SUCCESS:
            return {
                item: action.item
            }

        default:
            return state
    }
}