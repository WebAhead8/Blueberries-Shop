require('dotenv').config()

export const getComments = () => {

    return fetch(`${process.env.REACT_APP_BACKEND_URL}comment`)
        .then(promise => {
            return promise.json();
        })
        .catch(err => {
            throw new Error(`fetch products failed ${err}`);
        })
}
