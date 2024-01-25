import React from "react";
import "./searchbar.styles.css"


export const SearchBar = ({placeholder, handleInput}) => (
    <input 
        classNmae="seach"
        type="search"
        placeholder={placeholder}
        onChange={handleInput}
    />
);