import React from "react";

function SearchFilter({setSearchFilter,searchFilter}){

    return(
        <fieldset>
        <legend>Search</legend>
        <input value={searchFilter} type="text" id="search" name="search" onChange={e=>{
            setSearchFilter(e.target.value)
        }}/><br/>

       </fieldset>
    )
}

export default SearchFilter;