import React from 'react';
import './Filters.css'
import SearchFilter from "./SearchFilter/SearchFilter.js"
import CategoryFilter from "./CategoryFilter/CategoryFilter.js"
import PriceFilter from "./PriceFilter/PriceFilter.js"

function Filters({setSearchFilter,searchFilter,setCategoryFilter,categoryFilter,priceFilter,setPriceFilter}) {
    const [filters_visible, setfilters_visible] = React.useState(false);
    const [filters_buttonClass, setfilters_buttonClass] = React.useState("filters_button");
    const [filtersClass, setfiltersClass] = React.useState("filters");
  
  return (<div>
        <img src="/img/filter.png" className={filters_buttonClass} onClick={e => {
            if (filters_visible) {
                setfiltersClass("filters");
                setfilters_buttonClass("filters_button");
            } else {
                setfiltersClass("filters filters_visible");
                setfilters_buttonClass("filters_button filters_button_visible");
            }
            setfilters_visible(!filters_visible)

        }} />
        <div className={filtersClass}>
            <div className="filters_items">
                <br/>
                <h2>Filters</h2>
                <form>
                    <SearchFilter setSearchFilter={setSearchFilter} searchFilter={searchFilter}/>
                    <PriceFilter priceFilter={priceFilter} setPriceFilter={setPriceFilter}/>
                    <CategoryFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter}/>
                </form>
            </div>
        </div>
    </div>)
}

export default Filters;