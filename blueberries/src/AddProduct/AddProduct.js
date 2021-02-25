import React from "react"
import "../AddProduct/AddProduct.css"
import { addProduct } from "../Fetches/addProductFetch.js";
import { useHistory } from "react-router-dom";


function AddProduct(props) {
    const history = useHistory();

    const [category, setCategory] = React.useState("ice cream");
    const [product_Name, setProductName] = React.useState("");
    const [product_price, setProductPrice] = React.useState(0);
    const [product_description, setproduct_description] = React.useState("");
    const [product_quantity, setproduct_quantity] = React.useState(0);
    const [product_image, setproduct_image] = React.useState("");

    const addProductHandler = (e) => {
        e.preventDefault();
        const product = {
            name: product_Name,
            description: product_description,
            image: product_image,
            price: product_price,
            quantity: product_quantity,
            category: category
        }
        addProduct(product, localStorage.getItem("user")).then(data => {
            history.push("/");

        }

        )

    }


    return (
        <div>
            <form onSubmit={addProductHandler} className="addProductUpForm">
                <h1>Add Product</h1>
                <label htmlFor="product_Name">Product Name:
            <input required name="product_Name" id="product_Name" type="text" onChange={e => { setProductName(e.target.value) }} value={product_Name} />
                </label>

                <label htmlFor="product_price">Product Price:
            <input required name="product_price" id="product_price" type="number" onChange={e => { setProductPrice(e.target.value) }} value={product_price} />
                </label>

                <label htmlFor="product_cat">Product Category:
                <select id="product_cat" value={category} onChange={(event) => setCategory(event.target.value)}>
                        <option value="ice cream">ice cream</option>
                        <option value="drinks">drinks</option>
                        <option value="chocolate">chocolate</option>
                    </select>
                </label>

                <label htmlFor="product_Description">Product Description:
            <textArea required name="product_Description" id="product_Description" onChange={e => { setproduct_description(e.target.value) }} value={product_description} />
                </label>

                <label htmlFor="product_quantity">Product Quantity:
            <input required name="product_price" id="product_quantity" type="number" onChange={e => { setproduct_quantity(e.target.value) }} value={product_quantity} />
                </label>

                <label htmlFor="product_image">Product image:
            <input required placeholder="Image URL" name="product_image" id="product_image" type="text" onChange={e => { setproduct_image(e.target.value) }} value={product_image} />
                </label>


                <input className="button" value="Add Product" type="submit" />
            </form>
        </div>
    )
}

export default AddProduct;