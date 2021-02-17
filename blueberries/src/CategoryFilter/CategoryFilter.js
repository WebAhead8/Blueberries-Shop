import React from "react";

const categories = [
  "all",
"ice cream",
"drinks",
"chocolate"
];

function CategoryFilter({ catFilter, setCatFilter }) {
  return (
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
            checked={cat === catFilter}
            onChange={e => setCatFilter(e.target.value)}
          />
        </label>
      ))}
    </fieldset>
  );
}

export default CategoryFilter;