import React from "react";
import Logo from "./logo";
import SearchPane from "./searchPane";
import Linkers from "./linkers";
import Login from "./login";

const Navbar = () => {
    return (
        <div className="navbar">
            <Logo />
            <SearchPane />
            <div className="nav-list">
                <Linkers />
            </div>
            <Login />
        </div>
    );
};

export default Navbar;
