import React from "react";
import products from "../products/data";
function ProductsList({ catFilter, priceFilter }) {
  const [minPrice, maxPrice] = priceFilter;
  const productItems = products
    .filter(product => catFilter === "all" || catFilter === product.category)
    .filter(product => product.price >= minPrice && product.price <= maxPrice)
    .map(product => (
      <li key={product.id} className="card">
          <img src={require(/img/bounty.png)}/>
        <h3>{product.productName}</h3>
        <p>{product.description}</p>
        <div>₪{product.price.toFixed(2)}</div>
      </li>
    ));
  return (
    <ul className="grid">
      {productItems.length ? (
        productItems
      ) : (
        <li className="card">No products found</li>
      )}
    </ul>
  );
}

export default ProductsList;