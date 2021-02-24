require('dotenv').config()

export const getAllProducts=()=>{

return fetch(`http://localhost:4000/products`)
.then(promise=>{
     return promise.json();
})
.catch(err=>{
    throw new Error(`fetch products failed ${err}`);
})
}
