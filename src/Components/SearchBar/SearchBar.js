import React from 'react';
import { FaSearch } from 'react-icons/fa'
import './SearchBar.css'

 const SearchBar = (props) => {

  return(
    <div className="search-div">
       <input
        type="text"
        placeholder="Search for movie"
        className="search"
        onChange={props.onChange}/>
       <div>
         <FaSearch className="search-icon" onClick={props.iconClick}/>
      </div>
    </div>
  );
}

export default SearchBar;
