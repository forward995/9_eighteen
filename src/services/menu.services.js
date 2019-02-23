export const menuService = {
    menuAdd,
    menuGet,
    menuEdit,
    menuUpdate,
    menuDelete
}

const baseURL = 'http://localhost:8000'


function menuAdd(menu) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(menu)
    }
    return fetch(`${baseURL}/api/menusAdd`, requestOptions)
        .then(menu => {
            return menu;
        })
}

function menuGet() {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    return fetch(`${baseURL}/api/menus`, requestOptions)
}

function menuEdit(id) {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    return fetch(`${baseURL}/api/editmenu/${id}`, requestOptions)
}

function menuUpdate(menu) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(menu)
    }
    return fetch(`${baseURL}/api/updatemenus/${menu.id}`, requestOptions)
}

function menuDelete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    }
    return fetch(`${baseURL}/api/deletemenu/${id}`, requestOptions)
}