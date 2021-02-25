require('dotenv').config()

export const login = (email, password) => {

    return fetch(`${process.env.REACT_APP_BACKEND_URL}login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
        .then(promise => {
            return promise.json();
        })

}
