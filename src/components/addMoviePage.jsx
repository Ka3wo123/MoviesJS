import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const AddMoviePage = () => {

    const navigate = useNavigate();

    const [movieData, setMovieData] = useState({
        title: '',
        productionYear: '',
        plot: ''
    });

    const handleSubmit = () => {        
        console.log("Movie Data submitted:", movieData); 
        navigate('/');       
    };

    const handleCancel = () => {   
        navigate('/');
    };

    const years = Array.from({ length: 124 }, (_, index) => (2023 - index).toString());

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", color: "white", marginTop: "10px", fontSize: "30px" }}>Add new movie</div>
            <div className="add-movie-container">
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
                    <option value='' disabled selected>Select year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <label className="label">Plot</label>
                <textarea
                    type="text"
                    className="form-control plot-content"
                    value={movieData.plot}
                    onChange={(e) => setMovieData({ ...movieData, plot: e.target.value })}
                />
            </div>
            <div className="button-container-add-movie">
                <button type="button"
                    className="btn btn-primary"
                    style={{ backgroundColor: "#000", borderColor: "#BC25BF", color: "#BC25BF", width: '30vh' }}
                    onClick={handleSubmit}>Add</button>
                <button type="button"
                    className="btn btn-primary"
                    style={{ backgroundColor: "#000", borderColor: "#BC25BF", color: "#BC25BF", width: '30vh' }}
                    onClick={handleCancel}>Cancel</button>

            </div>
        </div>
    )

}

export default AddMoviePage;