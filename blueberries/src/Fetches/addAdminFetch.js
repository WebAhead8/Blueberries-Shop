require('dotenv').config()

export const addAdminFetch = (data,auth) => {

    return fetch(`${process.env.REACT_APP_BACKEND_URL}addAdmin`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'authentication': auth
        },
        body: JSON.stringify(data)
    })
        .then(promise => {
            return promise.json();
        })

}
