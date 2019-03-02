export const subCategoryService = {
    subCategoryAdd,
    subCategoryGet,
    // categoryEdit,
    // categoryUpdate,
    // categoryDelete
}

const baseURL = 'http://localhost:8000'


function subCategoryAdd(subCategory) {
    console.log("add")
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(subCategory)
    }
    return fetch(`${baseURL}/api/subCategoryAdd`, requestOptions).then(handleResponse)
}

function subCategoryGet(id) {
    console.log("iiii"+id)
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${baseURL}/api/subCategories/${id}`, requestOptions).then(handleResponse)
}

// function categoryEdit(id) {
//     console.log(id)
//     const requestOptions = {
//         method: 'GET',
//         headers: {'Content-Type': 'application/json'}
//     }
//     return fetch(`${baseURL}/api/editCategory/${id}`, requestOptions).then(handleResponse)
// }

// function categoryUpdate(category) {
//     const requestOptions = {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(category)
//     }
//     return fetch(`${baseURL}/api/updateCategory/${category.id}`, requestOptions).then(handleResponse)
// }

// function categoryDelete(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: {'Content-Type': 'application/json'},
//     }
//     return fetch(`${baseURL}/api/deleteCategory/${id}`, requestOptions).then(handleResponse)
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
