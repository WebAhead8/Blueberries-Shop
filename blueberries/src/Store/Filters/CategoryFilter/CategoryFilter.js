import React from "react"
const categories = [
    "all",
  "ice cream",
  "drinks",
  "chocolate"
  ];
function CategoryFilter({categoryFilter,setCategoryFilter}){
    return(
    <fieldset>
    <legend>Category</legend>
    {categories.map(cat => (
      <label htmlFor={cat} key={cat}>
        {cat}
        <input
          type="radio"
          name="categories"
          id={cat}
          value={cat}
          checked={cat===categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
        /><br/>
      </label>
    ))}
  </fieldset>
    )

}

export default CategoryFilter;