// import axios from 'axios'
export const courseService = {
    courseAdd,
    courseGet,
    courseEdit,
    courseUpdate,
    courseDelete
}

const baseURL = 'http://localhost:8000'


function courseAdd(course) {
    // console.log("add")
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(course)
    }
    return fetch(`${baseURL}/api/courseAdd`, requestOptions).then(handleResponse)
}

// async function courseGet() {
//     const instance = axios.create({baseURL:baseURL})
//     let Response = await instance.get(
//             `courses`,
//             {
//                 headers: {"Content-Type": "application/json"}
//             }
//         )
//     console.log(Response.data)
//     return Promise.resolve(Response.data)  
// }

function courseGet() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${baseURL}/api/courses`, requestOptions).then(handleResponse)
}

function courseEdit(id) {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    return fetch(`${baseURL}/api/editCourse/${id}`, requestOptions).then(handleResponse)
}

function courseUpdate(course) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(course)
    }
    return fetch(`${baseURL}/api/updateCourse/${course.id}`, requestOptions).then(handleResponse)
}

function courseDelete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    }
    return fetch(`${baseURL}/api/deleteCourse/${id}`, requestOptions).then(handleResponse)
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
