import axios from "axios";
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { isExpired } from "react-jwt";

const AddMoviePage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (isExpired(token)) {
            navigate("/login");

        }
    }, [navigate]);

    const [movieData, setMovieData] = useState({
        title: '',
        productionYear: '',
        plot: '',
        image: null,
        genre: ''
    });

    const handleSubmit = () => {
        if (movieData.title && movieData.image && movieData.plot && movieData.genre && movieData.productionYear) {
            axios({
                method: 'post',
                url: 'https://at.usermd.net/api/movies',
                data: {
                    title: movieData.title,
                    image: movieData.image,
                    content: movieData.plot,
                    genre: movieData.genre,
                    productionYear: movieData.productionYear
                }
            }).then(response => console.log(response))
                .catch(err => console.log(err));
            navigate('/');
        } else {
            toast.error('You need to fill each element')
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    const handleImageChange = (e) => {
        const imageURL = e.target.value;
        setMovieData((prevData) => ({ ...prevData, image: imageURL }));

    };


    const years = Array.from({ length: 124 }, (_, index) => (2023 - index).toString());
    const genres = [
        "Akcja",
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
        "Edukacyjny"
    ];

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", color: "white", marginTop: "10px", fontSize: "30px" }}>Add new movie</div>
            <form className="add-movie-container"
                onSubmit={handleSubmit}>
                <label className="label">Title</label>
                <input
                    type="text"
                    className="form-control custom-form-control"
                    value={movieData.title}
                    onChange={(e) => setMovieData({ ...movieData, title: e.target.value })}
                />
                <label className="label">Production year</label>
                <select
                    className="form-select"
                    value={movieData.productionYear}
                    onChange={(e) => setMovieData({ ...movieData, productionYear: e.target.value })}>
                    <option value='' disabled>Select year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <label className="label">Genre</label>
                <select
                    className="form-select"
                    value={movieData.genre}
                    onChange={(e) => setMovieData({ ...movieData, genre: e.target.value })}>
                    <option value='' disabled>Select genre</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
                <input
                    type="url"
                    placeholder="Enter URL of movie poster"
                    style={{ marginBottom: '10px' }}
                    onChange={handleImageChange}
                />
                {movieData.image && (
                    <img src={movieData.image} alt="poster" style={{ marginBottom: '10px', maxWidth: '200px', maxHeight: '500px', width: 'auto', height: 'auto' }} />
                )}
                <label className="label">Plot</label>
                <textarea
                    type="text"
                    className="form-control plot-content"
                    value={movieData.plot}
                    onChange={(e) => setMovieData({ ...movieData, plot: e.target.value })}
                />
                <div className="button-container-add-movie">

                    <button type="submit"
                        className="btn btn-primary"
                        style={{ backgroundColor: "#000", borderColor: "#BC25BF", color: "#BC25BF", width: '30vh' }}>Add</button>
                    <button type="reset"
                        className="btn btn-primary"
                        style={{ backgroundColor: "#000", borderColor: "#BC25BF", color: "#BC25BF", width: '30vh' }}
                        onClick={handleCancel}>Cancel</button>

                </div>
            </form>

            <ToastContainer />
        </div>
    )

}

export default AddMoviePage;