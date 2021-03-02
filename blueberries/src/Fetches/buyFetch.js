
require('dotenv').config()

export const buy = (data) => {
    console.log(data)
    return fetch(`${process.env.REACT_APP_BACKEND_URL}buy`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    })


}
