import React from "react";
import Filters from "./Filters/Filters.js"
import MyCard from "./MyCard/MyCard.js"
import "./Store.css"
import ProductsList from "./ProductsList/ProductsList.js"
function Store(props) {
 const [searchFilter ,setSearchFilter]=React.useState("");
 const [categoryFilter ,setCategoryFilter]=React.useState("all");
 const [priceFilter ,setPriceFilter]=React.useState([1,50]);
 const [myCard ,setMyCard]=React.useState([{},0]);

  return (
    <div className="store">
      <h1>Products</h1>
      <div className="products">
<ProductsList searchFilter={searchFilter} categoryFilter={categoryFilter} priceFilter={priceFilter}
 myCard={myCard} setMyCard={setMyCard}/>

      </div>
      <Filters searchFilter={searchFilter} setSearchFilter={setSearchFilter} 
      categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter}
      priceFilter={priceFilter} setPriceFilter={setPriceFilter}
      />
      <MyCard myCard={myCard} setMyCard={setMyCard}/>
    </div>
  );
}
export default Store;
