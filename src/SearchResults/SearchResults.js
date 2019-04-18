import React from 'react';
import './SearchResults.css'

 const SearchResults = (props) => {

  return(
    <div className="search-div">
      {props.children}
    </div>
  );
}

export default SearchResults;
