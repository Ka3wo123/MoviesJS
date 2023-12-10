// MovieCarousel.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import arrowNext from '../images/arrowNext.png'
import arrowPrev from '../images/arrowPrev.png'

const CustomArrow = ({ onClick, direction }) => {
    return (
        <div
            className={`custom-arrow ${direction}`}
            onClick={onClick}>
            {direction === 'prev' ? <img src={arrowPrev} alt='prev' /> : <img src={arrowNext} alt='next' />}
        </div>
    );
};

const MovieCarousel = () => {
    const [storedMovies, setStoredMovies] = useState([]);

    useEffect(() => {
        const storedMovies = localStorage.getItem('visitedMovies');
        const parsedMovies = storedMovies ? JSON.parse(storedMovies) : [];
        setStoredMovies(parsedMovies);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: storedMovies.length >= 2 ? 2 : 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow: <CustomArrow direction="prev" />,
        nextArrow: <CustomArrow direction="next" />,
    };

    return (
        <div style={{ maxWidth: '860px', padding: '20px' }}>
            <h2 style={{ color: 'white' }}>Recently Viewed</h2>
            {storedMovies?.length > 0 ? (
                <Slider {...settings} className='carousel-container'>
                    {storedMovies.map((movie, index) => {
                        return (
                            <Link
                                className='carousel'
                                to={`/details/${encodeURIComponent(`${movie.title}-${movie.productionYear}`)}`}
                                state={{ image: movie.image, plot: movie.plot, genre: movie.genre }}
                                key={movie.title + movie.productionYear}>
                                <div key={index} >
                                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                        <img src={movie.image} alt={movie.title} />
                                        <div>
                                            <p style={{ fontFamily: 'cursive' }}>{movie.plot}</p>
                                            <p>Genre: {movie.genre}</p>
                                        </div>
                                    </div>
                                    <p style={{ fontFamily: 'cursive' }}>{movie.title} ({movie.productionYear})</p>
                                    <div className="visit-count-tooltip">
                                        <p>Visits: {movie.visitCount || 0}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </Slider>
            ) : (
                <p>No recently viewed movies</p>
            )
            }
        </div >
    );
};

export default MovieCarousel;
