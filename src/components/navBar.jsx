import React from "react";
import Logo from "./logo";
import SearchPane from "./searchPane";
import Linkers from "./linkers";
import { useState } from "react";
import { decodeToken, isExpired } from "react-jwt";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ movies }) => {
    const [movieSuggestions, setMovieSuggestions] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState(null);
    const isNotLogged = isExpired(localStorage.getItem('token'));
    const user = decodeToken(localStorage.getItem('token'));
    const navigate = useNavigate();


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

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <div className="navbar">            
            <Logo />
            <SearchPane movieSuggestions={movieSuggestions} onSearch={handleSearch} onMoviePick={handleMoviePick} />
            {user && !isNotLogged && <span style={{ color: 'white' }}>{user.name}</span>}
            <Linkers />
            <div>   
                {isNotLogged ? <Link to="login">
                    <button
                        type="button"
                        className="btn btn-primary"
                        style={{ backgroundColor: "#000", borderColor: "#BC25BF", color: "#BC25BF", marginRight: "50px" }}>
                        LOGIN / SIGNUP
                    </button>
                </Link> :
                    <Link to="login">
                        <button
                            type="button"
                            className="btn btn-primary"
                            style={{ backgroundColor: "#000", borderColor: "#BC25BF", color: "#BC25BF", marginRight: "50px" }}
                            onClick={handleLogout}>
                            LOGOUT
                        </button>
                    </Link>
                }


            </div>  
            
        </div>
    );
};

export default Navbar;
