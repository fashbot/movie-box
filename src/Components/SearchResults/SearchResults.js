import React from 'react';
import './SearchResults.css'

 const SearchResults = (props) => {

  return(
    <div className="search-results-div">
      <div className="search-results-grid">
        {props.children}
      </div>
    </div>
  );
}

export default SearchResults;
