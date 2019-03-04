export const itemService = {
    itemAdd,
    itemGet,
    itemEdit,
    itemUpdate,
    itemDelete
}

const baseURL = 'http://localhost:8000'


function itemAdd(item) {
    // console.log("add")
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    }
    return fetch(`${baseURL}/api/itemsAdd`, requestOptions).then(handleResponse)
}

function itemGet(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${baseURL}/api/items/${id}`, requestOptions).then(handleResponse)
}

function itemEdit(id) {
    // console.log(id)
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    return fetch(`${baseURL}/api/editItem/${id}`, requestOptions).then(handleResponse)
}

function itemUpdate(item) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    }
    return fetch(`${baseURL}/api/updateItem/${item.itemId}`, requestOptions).then(handleResponse)
}

function itemDelete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    }
    return fetch(`${baseURL}/api/deleteItem/${id}`, requestOptions).then(handleResponse)
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
