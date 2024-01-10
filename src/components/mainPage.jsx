import MovieTable from "./moviesContent";
import { useEffect, useState, useRef } from "react";
import MovieCarousel from "./slides";
import axios from "axios";

const MainPage = () => {
    const genres = ["Akcja",
        "Komedia",
        "Dramat",
        "Science Fiction",
        "Horror",
        "Romans",
        "Fantasy",
        "Thriller",
        "Przygodowy",
        "Animacja",
        "Kryminał",
        "Historyczny",
        "Dokumentalny",
        "Muzyczny",
        "Western",
        "Familijny",
        "Mystery",
        "Film Noir",
        "Sportowy",
        "Surrealistyczny",
        "Superbohaterski",
        "Psychologiczny",
        "Edukacyjny"];
    const years = Array.from({ length: 124 }, (_, index) => (2023 - index).toString());
    const url = 'https://at.usermd.net/api/movies';
    const moviesPerPage = 10;

    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const exploreMoviesRef = useRef(null);


    const fetchMovies = () => {
        axios.get(url)
            .then(response => {

                const filteredMovies = response.data.filter(movie => movie.title.trim() !== '' && movie?.image);

                setMovies(filteredMovies);
                setFilteredMovies(filteredMovies);
                setPageCount(Math.ceil(filteredMovies.length / moviesPerPage));
            })
            .catch(err => {
                console.error(err);
            });
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        exploreMoviesRef.current.scrollIntoView({
            behavior: "auto",
        });
    };


    const handleFilteredMovies = () => {
        const filteredMovies = movies.filter((movie) => {
            const genreMatch = !selectedGenre || movie.genre.includes(selectedGenre);
            const yearMatch = !selectedYear || movie.productionYear == selectedYear;
            return genreMatch && yearMatch;
        });

        setFilteredMovies(filteredMovies);
    }

    const handleClear = () => {
        setFilteredMovies(movies);
    }

    useEffect(() => {
        fetchMovies();
    }, []);


    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;

    return (

        <div>
            <div className="explore-movies" ref={exploreMoviesRef}>
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
                <button onClick={handleFilteredMovies} className="btn btn-primary" style={{ backgroundColor: "#000", borderColor: "#BC25BF", color: "#BC25BF" }}>Submit</button>
                <button onClick={handleClear} className="btn btn-primary" style={{ backgroundColor: "#000", borderColor: "#BC25BF", color: "#BC25BF" }}>Clear filters</button>
            </div>


            {filteredMovies.length !== 0 ?
                <>
                    <MovieTable movies={filteredMovies.slice(startIndex, endIndex)} />
                    <div className="pagination">
                        {Array.from({ length: pageCount }, (_, index) => (
                            <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                                {index + 1}

                            </button>
                        ))}
                    </div>
                </>
                :
                <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
                    <strong style={{ color: "white" }}>No movies found!</strong>
                </div>
            }

            <div style={{ display: 'flex', justifyContent: "center" }}>
                <MovieCarousel />
            </div>

        </div>
    );
}

export default MainPage;