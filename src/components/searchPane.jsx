import React, { useState } from "react";
import iconSearch from "../images/searchIcon.png"
import { Link } from "react-router-dom";
import MovieSuggestionsList from "./moviesPropositionList";


const SearchPane = ({ movieSuggestions, onSearch, onMoviePick }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    onSearch(query.toLowerCase());
  };

  return (
    <div className="search-pane">
      <img src={iconSearch} alt="Icon search" className="icon-search-pane" />
      <input
        type="text"
        className="form-control"
        placeholder="Search for movies!"
        style={{ paddingLeft: 55 }}
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}

      />

      {Array.isArray(movieSuggestions) && movieSuggestions.length > 0 && (
        <MovieSuggestionsList
          movieSuggestions={movieSuggestions}
          onMoviePick={onMoviePick}
        />
      )}
    </div>
  );

}

export default SearchPane;