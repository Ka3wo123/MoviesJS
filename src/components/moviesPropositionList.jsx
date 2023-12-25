import React from "react";
import { Link } from "react-router-dom";

const MovieSuggestionsList = ({ movieSuggestions, onMoviePick }) => {
    const linkStyle = {
        textDecoration: 'none',
        color: '#fff'
    };
    return (
        <div className="suggestion-container">
            {movieSuggestions.map((movie) => (
                <Link
                    style={linkStyle}
                    to={`/details/${encodeURIComponent(`${movie.title}-${movie.productionYear}`)}`}
                    state={{ image: movie.image, plot: movie.content }}
                    key={movie.id}
                    onClick={() => onMoviePick()}>
                    <div className="suggestion-item">
                        <img src={movie.image} alt={movie.title} />
                        <div className="suggestion-details">
                            <span className="suggestion-title">{movie.title} </span>
                            <span className="suggestion-year">{movie.productionYear}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MovieSuggestionsList;

