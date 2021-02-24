require('dotenv').config()

export const login = (email, password) => {

    return fetch(`http://localhost:4000/login`, {
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
