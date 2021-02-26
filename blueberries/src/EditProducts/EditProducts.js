import React from "react";
import { getAllProducts } from "../Fetches/getProductsFetch";
import { updateQuantity } from "../Fetches/updateQuantity";
import { updatePrice } from "../Fetches/updatePriceFetch";
import { deleteProduct } from "../Fetches/deleteItem";
import "./EditProducts.css"
import { useHistory } from "react-router-dom";

function EditProducts(props) {
    const history = useHistory();

    const [products, setProducts] = React.useState(null);
    const [productsListArray, setproductsListArray] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState("");
    const priceChangeHandler = (e, i) => {
        let tempArr = [...products];
        tempArr[i].price = e.target.value;
        setProducts(tempArr);
    }

    const quantityChangeHandler = (e, i) => {

        let tempArr = [...products];
        tempArr[i].quantity = e.target.value;
        setProducts(tempArr);
    }

    const removeItemHandler = (e, i) => {
        const answer = window.confirm('Are you sure you want to delete this product?')
        if (answer) {
            deleteProduct(products[i].id, currentUser);

            let temp = products.filter((p, index) => {
                return (index !== i)
            })
            setProducts(temp)
            console.log('deleted.');
        } else {
            // Do nothing!
            console.log('not deleted.');

        }


    }

    const saveHandler = e => {
        for (let i = 0; i < products.length; i++) {
            const priceObj = {
                id: products[i].id,
                price: products[i].price
            }
            const quantityObj = {
                id: products[i].id,
                quantity: products[i].quantity
            }
            updatePrice(priceObj, currentUser);
            updateQuantity(quantityObj, currentUser);
        }
        history.push("/");


    }

    React.useEffect(() => {
        getAllProducts().then((data) => {
            setProducts(data);
        });
        setCurrentUser(localStorage.getItem("user"));
    }, []);

    React.useEffect(() => {
        if (products) {
            const list = products.map((product, i) => {
                console.log(product)
                return (<tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td><input type="number" value={product.price} onChange={e => { priceChangeHandler(e, i) }} /></td>
                    <td>{product.category}</td>
                    <td>{product.image}</td>
                    <td><input type="number" value={product.quantity} onChange={e => { quantityChangeHandler(e, i) }} /></td>
                    <td><img className="trashSymbol" src="https://cdn4.iconfinder.com/data/icons/personal-hygiene-line/72/Personal_Hygiene-45-512.png"
                        onClick={e => { removeItemHandler(e, i) }} /></td>
                </tr>
                )
            });
            setproductsListArray(list)

        }
    }, [products]);

    return (
        <table>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product price</th>
                    <th>Product category</th>
                    <th>Product image</th>
                    <th>Product quantity</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>{productsListArray}</tbody>
            <tfoot>
                <td colSpan="6"><img className="saveImg" src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-9/512/Save-icon.png" onClick={saveHandler} /></td>

            </tfoot>

        </table>
    );
}
export default EditProducts;
