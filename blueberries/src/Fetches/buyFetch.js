
require('dotenv').config()

export const buy = (data, auth) => {
    return fetch(`${process.env.REACT_APP_BACKEND_URL}buy`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'authentication': auth

        },
        body: JSON.stringify(data)
    })


}
