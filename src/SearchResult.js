import React from "react";

const SearchResult = (props) => {
  let items = props.searchItm;

  return (
      <li>
        <h3>{items.Brand}</h3>
        <p>{items.Variety}</p>
        <p>{items.Stars}</p>
      </li>
  );
};

export default SearchResult;
