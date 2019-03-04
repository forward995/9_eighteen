export const categoryService = {
    categoryAdd,
    categoryGet,
    categoryEdit,
    categoryUpdate,
    categoryDelete
}

const baseURL = 'http://localhost:8000'


function categoryAdd(category) {
    // console.log("add")
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(category)
    }
    return fetch(`${baseURL}/api/categoryAdd`, requestOptions).then(handleResponse)
}

function categoryGet(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${baseURL}/api/categories/${id}`, requestOptions).then(handleResponse)
}

function categoryEdit(id) {
    // console.log(id)
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    return fetch(`${baseURL}/api/editCategory/${id}`, requestOptions).then(handleResponse)
}

function categoryUpdate(category) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(category)
    }
    return fetch(`${baseURL}/api/updateCategory/${category.categoryId}`, requestOptions).then(handleResponse)
}

function categoryDelete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    }
    return fetch(`${baseURL}/api/deleteCategory/${id}`, requestOptions).then(handleResponse)
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
