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
            <Linkers/>
            <Login />
        </div>
    );
};

export default Navbar;
