import React from "react"

function PriceFilter({ priceFilter, setPriceFilter }) {
    return (
        <fieldset>
            <legend>Price</legend>
    max <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={priceFilter[1]}
                onChange={e => setPriceFilter([priceFilter[0], e.target.value])}
            />({priceFilter[1]})<br />
      min <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={priceFilter[0]}
                onChange={e => setPriceFilter([e.target.value, priceFilter[1]])}
            />({priceFilter[0]})
        </fieldset>
    )
}

export default PriceFilter;