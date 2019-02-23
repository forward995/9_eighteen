export const categoryService = {
    categoryAdd,
    categoryGet,
    categoryEdit,
    categoryUpdate,
    categoryDelete
}

const baseURL = 'http://localhost:8000'


function categoryAdd(category) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(category)
    }
    return fetch(`${baseURL}/api/categoryAdd`, requestOptions)
        .then(category => {
            return category;
        })
}

function categoryGet() {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    return fetch(`${baseURL}/api/category`, requestOptions)
}

function categoryEdit(id) {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    return fetch(`${baseURL}/api/categoryEdit/${id}`, requestOptions)
}

function categoryUpdate(category) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(category)
    }
    return fetch(`${baseURL}/api/categoryUpdate/${category.id}`, requestOptions)
}

function categoryDelete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    }
    return fetch(`${baseURL}/api/categoryDelete/${id}`, requestOptions)
}