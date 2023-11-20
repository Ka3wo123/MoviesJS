import React from "react";

const MovieTable = ({ movies }) => {
  return (
    <div className="movie-table">
      {movies && movies.map((movie) => (
        <div className="movie" key={movie.id}>          
          <img src={movie.image} alt={movie.title}/>
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieTable;
