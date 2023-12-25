import React from "react";
import Logo from "./logo";
import SearchPane from "./searchPane";
import Linkers from "./linkers";
import Login from "./login";
import { useState } from "react";

const Navbar = ({ movies }) => {
    const [movieSuggestions, setMovieSuggestions] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState(null);


    const handleSearch = (query) => {
        const result = movies.filter(
            (movie) => movie.title.toLowerCase().includes(query)
        );
        setFilteredMovies(result);

        const suggestions = movies.filter(
            (movie) => movie.title.toLowerCase().includes(query)
        );
        setMovieSuggestions(suggestions);

        if (!query) {
            setMovieSuggestions([]);
            setFilteredMovies(null);
        }

    };

    const handleMoviePick = () => {
        setMovieSuggestions([]);

    };

    return (
        <div className="navbar">
            <Logo />
            <SearchPane movieSuggestions={movieSuggestions} onSearch={handleSearch} onMoviePick={handleMoviePick} />
            <Linkers />
            <Login />
        </div>
    );
};

export default Navbar;
