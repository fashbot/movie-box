import React from 'react';
import './SearchBar.css'

 const SearchBar = (props) => {

  return(
    <div className="search-div">
       <input type="text" placeholder="Search for movie" className="search"/>
    </div>
  );

}

export default SearchBar;
