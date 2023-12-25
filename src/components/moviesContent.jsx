import React from "react";
import { Link } from "react-router-dom";

const MovieTable = ({ movies }) => {
  const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
  };

  const productionYearStyle = {
    position: 'absolute',
    bottom: 50,
    right: 5,
    fontSize: '14px',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0, 0.7)',
    padding: 5,
    borderRadius: 10
  };
  
  
  const handleMovieClick = (movie) => {
    const storedMovies = localStorage.getItem('visitedMovies');
    let existingMovies = storedMovies ? JSON.parse(storedMovies) : [];
  
    const selectedMovieDetails = {
      title: movie.title,
      productionYear: movie.productionYear,
      image: movie.image,
      plot: movie.content,
      genre: movie.genre,
      visitCount: (existingMovies.find((m) => m.title === movie.title && m.productionYear === movie.productionYear)?.visitCount || 0) + 1,
    };
  
    const existingMovieIndex = existingMovies.findIndex((existingMovie) => (
      existingMovie.title === selectedMovieDetails.title &&
      existingMovie.productionYear === selectedMovieDetails.productionYear
    ));
  
    if (existingMovieIndex !== -1) {      
      existingMovies[existingMovieIndex] = selectedMovieDetails;
    } else {      
      existingMovies.push(selectedMovieDetails);
    }
      
    existingMovies = existingMovies.filter(
      (movie, index, self) =>
        index === self.findIndex((m) => m.title === movie.title && m.productionYear === movie.productionYear)
    );
  
    localStorage.setItem('visitedMovies', JSON.stringify(existingMovies));
  };

  return (  
    <div className="movie-table">
      {movies && movies.map((movie) => (
        <Link
          style={linkStyle}
          to={`/details/${encodeURIComponent(`${movie.title}-${movie.productionYear}`)}`}
          state={{ image: movie.image, plot: movie.content, genre: movie.genre }}
          key={movie.id}
          onClick={() =>handleMovieClick(movie)}
        >
          <div className="movie" style={{ position: 'relative' }}>
            <img src={movie.image} alt={movie.title} />            

            <span style={productionYearStyle}>{movie.productionYear}</span>

            <p>{movie.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieTable;
