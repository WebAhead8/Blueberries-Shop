require('dotenv').config()

export const addAdminFetch = (data) => {

    return fetch(`${process.env.REACT_APP_BACKEND_URL}addAdmin`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(promise => {
            return promise.json();
        })

}
