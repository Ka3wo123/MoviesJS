
import moviesJSLogo from "../images/moviesJSLogo.png"
import { Link } from "react-router-dom";

const Logo = () => {

    return (
        <div className="logo-wrapper">
            <Link to='/'>
                <img className="logo" src={moviesJSLogo} alt="MoviesJS logo"></img>

            </Link>
        </div>
    );

}

export default Logo;