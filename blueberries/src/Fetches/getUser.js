require('dotenv').config()

export const getUser = (token) => {

    return fetch(`http://localhost:4000/getuser`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ access_token: token })
    })
        .then(promise => {
            return promise.json();
        })
        .catch(err => {
            throw new Error(`fetch products failed ${err}`);
        })
}
