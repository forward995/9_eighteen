export const planService = {
    planAdd,
    getPlans,
    planEdit,
    planUpdate,
    deletePlan,
}

const baseURL = 'http://localhost:8000'


function planAdd(plan) {
    // console.log("add")
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(plan)
    }
    return fetch(`${baseURL}/api/plansAdd`, requestOptions).then(handleResponse)
}

// function getPlans(date) {
//     const requestOptions = {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     return fetch(`${baseURL}/api/plans/${date}`, requestOptions).then(handleResponse)
// }
function getPlans() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${baseURL}/api/plans`, requestOptions).then(handleResponse)
}

function planEdit(id) {
    // console.log(id)
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    return fetch(`${baseURL}/api/editPlan/${id}`, requestOptions).then(handleResponse)
}

function planUpdate(plan) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(plan)
    }
    return fetch(`${baseURL}/api/updatePlan/${plan._id}`, requestOptions).then(handleResponse)
}

function deletePlan(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    }
    return fetch(`${baseURL}/api/deletePlan/${id}`, requestOptions).then(handleResponse)
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if(!response.ok) {
            if(response.status === 401) {
                console.log('401')
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error)
        }
        return data
    })
}
