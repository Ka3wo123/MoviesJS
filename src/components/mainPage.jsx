import MovieTable from "./moviesContent";
import movies from "./movies";
import { useEffect, useState } from "react";
import MovieCarousel from "./slides";

const MainPage = () => {
    const genres = ['Action', 'Commedy', 'Horror', 'Family', 'Sci-Fi'];
    const years = Array.from({ length: 124 }, (_, index) => (2023 - index).toString());
    const ratings = ['1+', '2+', '3+', '4+', '5+', '6+', '7+', '8+', '9+'];

    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedRating, setSelectedRating] = useState('');
    const [filteredMovies, setFilteredMovies] = useState(movies);    




    const handleFilteredMovies = () => {
        const filteredMovies = movies.filter((movie) => {
            const genreMatch = !selectedGenre || movie.genre.includes(selectedGenre);
            const yearMatch = !selectedYear || movie.productionYear === selectedYear;
            const ratingMatch = !selectedRating || parseInt(movie.rating) >= parseInt(selectedRating);


            return genreMatch && yearMatch;
        });

        setFilteredMovies(filteredMovies);
    }

    const handleClear = () => {        
        setFilteredMovies(movies);
    }

    return (
        <div>

            <div className="explore-movies">
                <section id="explore" />
                <p>Explore movies</p>
            </div>

            <div className="select-options">
                <select className='form-select'
                    onChange={(e) => setSelectedGenre(e.target.value)} >
                    <option value="">Select Genres</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
                <select className='form-select'
                    onChange={(e) => setSelectedYear(e.target.value)} >
                    <option value="">Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <select className='form-select'
                    onChange={(e) => setSelectedRating(e.target.value)} >
                    <option value="" >Select Rating</option>
                    {ratings.map((rating) => (
                        <option key={rating} value={rating}>
                            {rating}
                        </option>
                    ))}
                </select>
                <button onClick={handleFilteredMovies} className="btn btn-primary" style={{ backgroundColor: "#000", borderColor: "#BC25BF", color: "#BC25BF" }}>Submit</button>
                <button onClick={handleClear} className="btn btn-primary" style={{ backgroundColor: "#000", borderColor: "#BC25BF", color: "#BC25BF" }}>Clear filters</button>
            </div>


            {filteredMovies.length !== 0 ? <MovieTable movies={filteredMovies} /> :
                <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
                    <strong style={{ color: "white" }}>No movies found!</strong>
                </div>
            }

            <div style={{display: 'flex', justifyContent: "center"}}>
                <MovieCarousel  />
            </div>

        </div>
    );
}

export default MainPage;