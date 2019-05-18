import { userConstants } from '../constants'
// import { subCategoryActions } from '../actions/subCategory.actions';

// const initialState = {
//     categories:[]
// }
export function plan(state={}, action) {
    switch(action.type) {
        case userConstants.PLAN_GET_REQUEST:
            return {}
        case userConstants.PLAN_GET_SUCCESS:
            return Object.assign({}, state, {
                plans: action.plans
            })
        case userConstants.PLAN_EDIT_REQUEST:
            return {}
        case userConstants.PLAN_EDIT_SUCCESS:
            return Object.assign({}, state, {
                plan: action.plan
            })
        case userConstants.PLAN_UPDATE_REQUEST:
            return {}
        case userConstants.PLAN_UPDATE_SUCCESS:
            return Object.assign({}, state, {
                plan: action.plan
            })
        case userConstants.PLAN_DELETE_REQUEST:
            return {}
        case userConstants.PLAN_DELETE_SUCCESS:
            return {}

        case userConstants.PLAN_ADD_REQUEST:
            return {}
        case userConstants.PLAN_ADD_SUCCESS:
            return {
                plan: action.plan
            }

        default:
            return state
    }
}