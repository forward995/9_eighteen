export const subCategoryService = {
    subCategoryAdd,
    subCategoryGet,
    subCategoryEdit,
    subCategoryUpdate,
    subCategoryDelete
}

const baseURL = 'http://localhost:8000'


function subCategoryAdd(subCategory) {
    // console.log("add")
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(subCategory)
    }
    return fetch(`${baseURL}/api/subCategoryAdd`, requestOptions).then(handleResponse)
}

function subCategoryGet(id) {
    // console.log("iiii"+id)
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${baseURL}/api/subCategories/${id}`, requestOptions).then(handleResponse)
}

function subCategoryEdit(id) {
    // console.log(id)
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    return fetch(`${baseURL}/api/editSubCategory/${id}`, requestOptions).then(handleResponse)
}

function subCategoryUpdate(subCategory) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(subCategory)
    }
    return fetch(`${baseURL}/api/updateSubCategory/${subCategory.subCategoryId}`, requestOptions).then(handleResponse)
}

function subCategoryDelete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    }
    return fetch(`${baseURL}/api/deleteSubCategory/${id}`, requestOptions).then(handleResponse)
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
