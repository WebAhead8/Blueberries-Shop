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
    //console.log(myCard)

  }



  // if (productsListArray.length===0)
  // {
  //   console.log("list",productsListArray)
  //   return (
  //     <div className="products">

  //      <div className="card"><h1>No Products Found</h1></div> 
  //     </div>
  //   )
  // }
  // if(!products){return (<h1>Loading</h1>)}

  return (
    <div className="products">
      {productsListArray}
    </div>
  )
}

export default ProductsList;