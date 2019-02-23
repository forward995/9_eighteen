export const itemService = {
    itemAdd,
    itemGet,
    itemEdit,
    itemUpdate,
    itemDelete
}

const baseURL = 'http://localhost:8000'


function itemAdd(item) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    }
    return fetch(`${baseURL}/api/itemAdd`, requestOptions)
        .then(item => {
            return item;
        })
}

function itemGet() {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    return fetch(`${baseURL}/api/items`, requestOptions)
}

function itemEdit(id) {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    return fetch(`${baseURL}/api/editItem/${id}`, requestOptions)
}

function itemUpdate(item) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    }
    return fetch(`${baseURL}/api/updateItems/${item.id}`, requestOptions)
}

function itemDelete(id) {
    const requestOptions = {
        method: 'Delete',
        headers: {'Content-Type': 'application/json'},
    }
    return fetch(`${baseURL}/api/updateItems/${id}`, requestOptions)
}