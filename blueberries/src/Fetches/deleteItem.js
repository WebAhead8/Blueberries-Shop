export const deleteProduct = (id, auth) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}products/${id}`, {
        method: "DELETE",
        headers: {
            'authentication': auth
        }
    })
}