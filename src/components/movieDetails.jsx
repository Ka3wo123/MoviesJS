import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { decodeToken, isExpired } from "react-jwt";
import axios from "axios";

const MovieDetailsPage = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const { state } = location;
    const { id } = state || {};

    const textStyle = {
        color: 'white'
    }

    const url = 'https://at.usermd.net/api/movies/';
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    const isNotLogged = isExpired(localStorage.getItem('token'));

    const [movie, setMovie] = useState({
        title: '',
        image: null,
        content: ''
    });

    const fetchMovieDetails = () => {
        axios.get(url + id)
            .then(response => { setMovie(response.data); console.log(response.id) })
            .catch(err => {
                console.error(err);
            });
    };

    const handleDeletion = () => {
        axios.delete('https://at.usermd.net/api/movie/' + id, config)
        .then(response => console.log('Movie deleted'))
        .catch(err => console.log(err));
        navigation('/');
    }

    useEffect(() => {
        fetchMovieDetails();
    }, [navigation]);

    const imgStyle = {
        width: "250px",
        height: "400px",
        marginRight: "20px",
        objectFit: "cover"
    };

    return (
        <>
            <div style={{ display: "flex", margin: "18px" }}>
                {<img src={movie.image} alt={movie.title} style={imgStyle} />}
                <div>
                    <h2 style={textStyle}>{movie.title}</h2>
                    <p style={textStyle}>{movie.productionYear}</p>
                    <hr style={{ width: "100%", borderTop: "2px solid #BC25BF", marginBottom: "10px" }} />
                    <p style={textStyle}>{movie.content}</p>
                    <hr style={{ width: "100%", borderTop: "2px solid #BC25BF", marginBottom: "10px" }} />
                    <p style={textStyle}>{movie.genre}</p>
                </div>

            </div>
            <div style={{display: 'flex', justifyContent: 'center', margin: '10px'}}>
                {!isNotLogged && <button onClick={handleDeletion} className="btn btn-primary-deletion">Delete movie</button>}
            </div>
        </>
    );
};

export default MovieDetailsPage;
