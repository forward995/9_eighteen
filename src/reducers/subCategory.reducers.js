import { userConstants } from '../constants'
// import { subCategoryActions } from '../actions/subCategory.actions';

// const initialState = {
//     categories:[]
// }
export function subCategory(state={}, action) {
    switch(action.type) {
        case userConstants.SUBCATEGORY_GET_REQUEST:
            return {}
        case userConstants.SUBCATEGORY_GET_SUCCESS:
            return Object.assign({}, state, {
                subCategories: action.subCategories
            })
        case userConstants.SUBCATEGORY_GET_FAILURE:
            return {}

        case userConstants.SUBCATEGORY_EDIT_REQUEST:
            return {}
        case userConstants.SUBCATEGORY_EDIT_SUCCESS:
            return Object.assign({}, state, {
                subCategory: action.subCategory
            })
        case userConstants.SUBCATEGORY_UPDATE_REQUEST:
            return {}
        case userConstants.SUBCATEGORY_UPDATE_SUCCESS:
            return {}

        case userConstants.SUBCATEGORY_DELETE_REQUEST:
            return {}
        case userConstants.SUBCATEGORY_DELETE_SUCCESS:
            return {}

        case userConstants.SUBCATEGORY_ADD_REQUEST:
            return {}
        case userConstants.SUBCATEGORY_ADD_SUCCESS:
            return {
                subCategory: action.subCategory
            }

        default:
            return state
    }
}