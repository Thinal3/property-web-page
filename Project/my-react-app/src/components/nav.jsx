import React,{ useState } from "react";
import "../style/nav.css";

const NavBar=()=>{

    return(
        <nav className="navBar">

            <div className="naw-container">

                <div className="logo">
                    <span>Freedom</span>
                </div>

                <ul className="nav-links">
                    <li><a href="#">Find property</a></li>
                    <li><a href="#">Favorites</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

            </div>
        </nav>
    );
}

export default NavBar;