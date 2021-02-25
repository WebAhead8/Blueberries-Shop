require('dotenv').config()

export const getAllProducts = () => {

    return fetch(`${process.env.REACT_APP_BACKEND_URL}products`)
        .then(promise => {
            return promise.json();
        })
        .catch(err => {
            throw new Error(`fetch products failed ${err}`);
        })
}
