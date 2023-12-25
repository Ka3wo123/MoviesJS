import React, { useState } from "react";
import MovieSuggestionsList from "./moviesPropositionList";


const SearchPane = ({ movieSuggestions, onSearch, onMoviePick }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    onSearch(query.toLowerCase());
  };

  return (
    <div className="search-pane">
      <div className="search-pane-container">        
        <input
          type="text"
          className="form-control with-icon"
          placeholder="Search for movies!"
          style={{ paddingLeft: 55 }}
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}

        />
      </div>

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