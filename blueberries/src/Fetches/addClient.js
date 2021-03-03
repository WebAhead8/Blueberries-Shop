require('dotenv').config()

export const addClient = (data) => {

    return fetch(`${process.env.REACT_APP_BACKEND_URL}addClient`, {
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
