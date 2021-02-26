require('dotenv').config()

export const updateQuantity = (data, auth) => {

    return fetch(`${process.env.REACT_APP_BACKEND_URL}updateQuantity`, {
        method: "PUT",
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
