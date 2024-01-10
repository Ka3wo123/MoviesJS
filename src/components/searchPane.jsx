import React, { useState, useEffect, useRef } from "react";
import MovieSuggestionsList from "./moviesPropositionList";

const useClickOutside = (callback) => {
  const ref = useRef();

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return ref;
};

const SearchPane = ({ movieSuggestions, onSearch, onMoviePick }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchPaneRef = useClickOutside(() => setShowSuggestions(false));

  const handleSearch = (query) => {
    setSearchQuery(query);
    onSearch(query.toLowerCase());
    setShowSuggestions(true);
  };

  return (
    <div className="search-pane" ref={searchPaneRef}>
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

      {showSuggestions && Array.isArray(movieSuggestions) && movieSuggestions.length > 0 && (
        <MovieSuggestionsList
          movieSuggestions={movieSuggestions}
          onMoviePick={onMoviePick}
        />
      )}
    </div>
  );
};

export default SearchPane;
