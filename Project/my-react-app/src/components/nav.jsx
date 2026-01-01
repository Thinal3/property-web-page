import React,{ useState } from "react";
import "../style/nav.css";
import { NavHashLink } from "react-router-hash-link";

const NavBar=()=>{

    return(
        <nav className="navBar">

            <div className="naw-container">

                <div className="logo">
                    <NavHashLink smooth to={"/"}><span>Freedom</span></NavHashLink>
                </div>

                <ul className="nav-links">
                    <li><NavHashLink smooth to={"/#search-form-id"}>Find property</NavHashLink></li>
                    <li><NavHashLink to={"/Favorites"}>Favorites</NavHashLink></li>
                    <li><NavHashLink smooth to={"/#about-id"}>About us</NavHashLink></li>
                    <li><NavHashLink smooth to={"/#contact-id"}>contact</NavHashLink></li>
                </ul>

            </div>
        </nav>
    );
}

export default NavBar;