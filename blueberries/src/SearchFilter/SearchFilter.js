import React from "react";


function SearchFilter({ search, setSearch }) {
  return (
    <fieldset>
      <legend>Search</legend>
   <input
   type="text"
   value={search}
   onChange={e=>{setSearch(e.target.value)}}
   />
    </fieldset>
  );
}

export default SearchFilter;