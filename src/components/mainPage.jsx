
import img2 from "../images/toy-story.jpg"
import img3 from "../images/exorcist.jpg"
import img4 from "../images/mandy.jpg"
import img5 from "../images/chinatown.jpg"
import img6 from "../images/blade-runer.jpg"
import img7 from "../images/max-payne.jpg"
import img8 from "../images/space-odyssey.jpg"
import img9 from "../images/word-war.jpg"
import img10 from "../images/shawshank.png"
import img11 from "../images/mulholland-dr.jpg"
import MovieTable from "./moviesContent";


const MainPage = () => {    
    const movies = [
        { id: 1, title: 'Toy Story', image: img2},
        { id: 2, title: 'The Exorcist', image: img3 },
        { id: 3, title: 'Mandy', image: img4 },
        { id: 4, title: 'Chinatown', image: img5 },
        { id: 5, title: 'Blade Runner 2049', image: img6 },
        { id: 6, title: 'Max Payne', image: img7 },
        { id: 7, title: '2001: A space Odyssey', image: img8 },
        { id: 8, title: 'The War of the Worlds', image: img9 },
        { id: 9, title: 'The Shawshank Redemption', image: img10 },
        { id: 10, title: 'Mulholland Dr.', image: img11}   
      ];
    const genres = ['Action', 'Commedy', 'Horror', 'Family', 'Sci-Fi'];
    const years = ['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016']; 
    const ratings = ['1+', '2+', '3+', '4+', '5+', '6+', '7+', '8+', '9+'];   
    
    return (
        <div>
            <div className="explore-movies">
                <section id="explore" />
                <p>Explore movies</p>
            </div>

            <div className="select-options">
                <select className='form-select' >
                    <option value="">Select Genres</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
                <select className='form-select' >
                    <option value="">Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select> 
                <select className='form-select' >
                    <option value="">Select Rating</option>
                    {ratings.map((rating) => (
                        <option key={rating} value={rating}>
                            {rating}
                        </option>
                    ))}
                </select>               
                <button className="btn btn-primary" style={{ backgroundColor: "#000", borderColor: "#BC25BF", color: "#BC25BF"}}>Submit</button>
            </div>

            
            <MovieTable movies={movies}/>
        </div>
    );
}

export default MainPage;