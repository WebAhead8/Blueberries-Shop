import React from "react";
//import products from "../../products/data";
import { getAllProducts } from "../../Fetches/getProductsFetch"

function ProductsList({ searchFilter, categoryFilter, priceFilter, myCard, setMyCard }) {
  const [products, setProducts] = React.useState([])
  const [productsListArray, setProductsList] = React.useState([])

  React.useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data)

    })
  }, [])

  React.useEffect(() => {

    if (products.length > 0) {
      const list =
        products.filter(product => {
          return ((product.name.toLowerCase())
            .includes(searchFilter.toLowerCase()))
        })
          .filter(product => {

            return (categoryFilter === "all" || product.category === categoryFilter)
          })
          .filter(product => {

            return (product.price >= priceFilter[0] && product.price <= priceFilter[1])
          })
          .map((product, i) => {

            return (
              <div key={product.id} className="card">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <img src={product.image} />
                <div className="lastLine">
                  <img className="addToCart" src="/img/addToBasket.png"
                    onClick={e => {

                      addToCardHandler(product.id, product.price, i)
                    }}

                  />
                  <label className="price">price : {product.price} ₪</label>
                </div>
              </div>
            )
          })
      setProductsList(list)
    }
  }, [products, searchFilter, categoryFilter, priceFilter])






  const addToCardHandler = (productID, productPrice, i) => {

    setMyCard(prev => {
      let tempObj = { ...prev[0] };
      if (!tempObj[productID]) {
        tempObj[productID] = 1;
      } else {

        if (tempObj[productID] + 1 > products[i].quantity) {
          alert(`we only have ${products[i].quantity} ${products[i].name}`)
          return [tempObj, prev[1]]

        } else {
          tempObj[productID] = tempObj[productID] + 1;
        }

      }
      localStorage.setItem("myCard", JSON.stringify([tempObj, prev[1] + productPrice]))

      return [tempObj, prev[1] + productPrice]
    });

  }



  if (products.length > 0) {
    return (
      <div className="products">
        {productsListArray}
      </div>
    )
  } else {
    return (
      <div>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif" />
      </div>
    )
  }

}

export default ProductsList;