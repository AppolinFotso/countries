import React from "react";

function Search(props) {
  return (
    <div className="search">
      <input
        type="search"
        onChange={(e) => props.search(e.target.value)}
        placeholder="Search for a country"
      />
    </div>
  );
}

export default Search;
