import React from "react";
//import products from "../../products/data";
import {getAllProducts} from "../../Fetches/getProductsFetch"
let products=[];
function ProductsList({ searchFilter,categoryFilter,priceFilter, myCard ,setMyCard}) {
React.useEffect(()=>{
  getAllProducts().then((data)=>{
    console.log("DATA",data)
  })
},[])

const addToCardHandler=(productID,productPrice)=>{
  let tempObj={...myCard[0]};
  if(!tempObj[productID]) {
    tempObj[productID]=1;
  }else{
    tempObj[productID]=tempObj[productID]+1;

  }
  setMyCard([tempObj,myCard[1]+productPrice]);
}


  const productsListArray = products
  .filter(product => {
    return ((product.productName.toLowerCase())
      .includes(searchFilter.toLowerCase()))
  })
  .filter(product=>{
    return(categoryFilter==="all" || product.category===categoryFilter)
  })
  .filter(product=>{
    return( product.price>=priceFilter[0] && product.price <= priceFilter[1])
  })
    .map(product => {
      return (
        <div key={product.id} className="card">
          <h3>{product.productName}</h3>
          <p>{product.description}</p>
          <img src={product.img} />
          <div className="lastLine">
            <img className="addToCart" src="/img/addToBasket.png" 
            onClick={e=>{addToCardHandler(product.id,product.price)}}
            />
            <label className="price">price : {product.price} ₪</label>
          </div>
        </div>
      )
    })
if (productsListArray.length===0)
{
  return (
    <div className="products">
      
     <div className="card"><h1>No Products Found</h1></div> 
    </div>
  )
}
if(!products){return (<h1>Loading</h1>)}

  return (
    <div className="products">
      {productsListArray}
    </div>
  )
}

export default ProductsList;