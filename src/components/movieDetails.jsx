import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const MovieDetailsPage = () => {    

    const { titleYear } = useParams();
    const [title, productionYear] = decodeURIComponent(titleYear).split('-');
    const location = useLocation();
    const { state } = location;
    const { image, plot, genre } = state || {};

    const textStyle = {
        color: 'white'
    }

    return (
        <div style={{ display: "flex", margin: "18px" }}>
            {image && <img src={image} alt={title} style={{ marginRight: "20px" }} />}
            <div>
                <h2 style={textStyle}>{title}</h2>
                <p style={textStyle}>{productionYear}</p>
                <hr style={{ width: "100%", borderTop: "2px solid #BC25BF", marginBottom: "10px" }} />
                <p style={textStyle}>{plot}</p>                
                <hr style={{ width: "100%", borderTop: "2px solid #BC25BF", marginBottom: "10px" }} />                
            </div>
        </div>
    );
};

export default MovieDetailsPage;
