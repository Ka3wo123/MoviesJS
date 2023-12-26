import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return <div className="jumbotron" style={{ display: "flex", justifyContent: 'center', margin: 10 }}>
        <div>

            <h1 className="display-4" style={{ color: "white" }}>404 - Not found!</h1>
            <p className="lead" style={{ color: "white" }}>Page you are looking for does not exist.</p>
            <hr className="my-4" style={{color: "white"}}/>
            <p style={{ color: 'white' }}>Go back to Home</p>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <Link className="btn btn-primary btn-lg" style={{ backgroundColor: "#000", borderColor: "#BC25BF", color: "#BC25BF", marginRight: "50px" }} to="/" role="button">Home</Link>
            </div>
        </div>
    </div>;
}

export default NotFound;