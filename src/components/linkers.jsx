
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Linkers = () => {

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
  };

  return (
    <ul>
      <li className="nav-item">        
        <HashLink style={linkStyle} to="/#explore">Explore movies</HashLink>
      </li>
      <li className="nav-item">
        <Link to="add-movie" style={linkStyle}>
          Add movie
        </Link>
      </li>
    </ul>
  );
};

export default Linkers;
