import React from "react";
import iconSearch from "../images/searchIcon.png"


const SearchPane = () => {
    return (        
            <div className="search-pane">
                <img src={iconSearch} alt="Icon search" className="icon-search-pane" />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for movies!"
                    style={{ paddingLeft: 55 }}
                />
            </div>    
    )
}

export default SearchPane;