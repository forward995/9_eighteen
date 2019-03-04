import { userConstants } from '../constants'
import { planService } from '../services/plans.services'
import {history} from '../history'
export const planActions = {
    getPlans,
    planEdit,
    planUpdate,
    deletePlan,
    planAdd
}

function getPlans(date) {
    return dispatch => {
        dispatch(request(date))
        console.log('get')
        planService.getPlans(date)
            .then(
                (plans) => {
                    console.log(plans)
                dispatch(success(plans)) 
            },
                error => {
                    console.log(error)
                }
            )
    }
    function request(date) {
        return {
            type: userConstants.PLAN_GET_REQUEST,
            date
        }
    }
    function success(plans) {
        return {
            type: userConstants.PLAN_GET_SUCCESS,
            plans
        }
    }
}

function planEdit(id) {
    return dispatch => {
        dispatch(request(id))
        console.log("edit")
        planService.planEdit(id)
            .then(
                (plan) => {
                    dispatch(success(plan))
                },
                error => {
                    console.log(error)
                }
            )
    }
    function request(id) {
        return {
            type: userConstants.PLAN_EDIT_REQUEST,
            id
        }
    }
    function success(plan) {
        return {
            type: userConstants.PLAN_EDIT_SUCCESS,
            plan
        }
    }
}

function planUpdate(plan) {
    return dispatch => {
        console.log("update")
        dispatch(request(plan._id))
        planService.planUpdate(plan)
            .then(
                (plan) => {
                    dispatch(success(plan))
                },
                error => {
                    console.log(error)
                }
            )
    }
    function request(id) {
        return {
            type: userConstants.PLAN_UPDATE_REQUEST,
            id
        }
    }
    function success(plan) {
        return {
            type: userConstants.PLAN_UPDATE_SUCCESS,
            plan
        }
    }
}

function deletePlan(id) {
    return dispatch => {
        dispatch(request(id))
        console.log("delete")
        planService.deletePlan(id)
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
            type: userConstants.PLAN_DELETE_REQUEST,
            id
        }
    }
    function success() {
        return {
            type: userConstants.PLAN_DELETE_SUCCESS
        }
    }
}

function planAdd(plan) {
    return dispatch => {
        dispatch(request(plan))
        console.log("add")
        planService.planAdd(plan)
            .then(
                (plan) => {
                    dispatch(success(plan))
                    history.push('/home#');
                },
                error => {
                    console.log(error)
                }
            )
    }
    function request(plan) {
        return {
            type: userConstants.PLAN_ADD_REQUEST,
            plan
        }
    }
    function success(plan) {
        return {
            type: userConstants.PLAN_ADD_SUCCESS,
            plan
        }
    }
}
