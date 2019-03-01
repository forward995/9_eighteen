export const categoryService = {
    // courseAdd,
    categoryGet,
    // courseEdit,
    // courseUpdate,
    // courseDelete
}

const baseURL = 'http://localhost:8000'


// function courseAdd(course) {
//     console.log("add")
//     const requestOptions = {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(course)
//     }
//     return fetch(`${baseURL}/api/courseAdd`, requestOptions).then(handleResponse)
// }

function categoryGet(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${baseURL}/api/categories/${id}`, requestOptions).then(handleResponse)
}

// function courseEdit(id) {
//     console.log(id)
//     const requestOptions = {
//         method: 'GET',
//         headers: {'Content-Type': 'application/json'}
//     }
//     return fetch(`${baseURL}/api/editCourse/${id}`, requestOptions).then(handleResponse)
// }

// function courseUpdate(course) {
//     const requestOptions = {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(course)
//     }
//     return fetch(`${baseURL}/api/updateCourse/${course.id}`, requestOptions).then(handleResponse)
// }

// function courseDelete(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: {'Content-Type': 'application/json'},
//     }
//     return fetch(`${baseURL}/api/deleteCourse/${id}`, requestOptions).then(handleResponse)
// }

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
