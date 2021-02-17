import React from "react";
import "./Store.css";
import PriceFilter from "../PriceFilter/PriceFilter.js";
import CategoryFilter from "../CategoryFilter/CategoryFilter.js";
import ProductsList from "../ProductsList/ProductsList.js";
function Store(props) {
  const [catFilter, setCatFilter] = React.useState("all");
  const [priceFilter, setPriceFilter] = React.useState([1, 50]);
  return (
    <main>
      <section className="filters">
        <h1>Blueberries Shop</h1>
        <h2>Filters</h2>
        <form>
          <PriceFilter
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
          />
          <CategoryFilter catFilter={catFilter} setCatFilter={setCatFilter} />
        </form>
      </section>
      <section className="products">
        <h2>Products</h2>
        <ProductsList catFilter={catFilter} priceFilter={priceFilter} />
      </section>
    </main>
  );
}

export default Store;
