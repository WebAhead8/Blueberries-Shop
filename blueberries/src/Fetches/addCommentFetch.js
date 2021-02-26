require('dotenv').config()

export const addcomment = (data) => {

    return fetch(`${process.env.REACT_APP_BACKEND_URL}comment`, {
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
