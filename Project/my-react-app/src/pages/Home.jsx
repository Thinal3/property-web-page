import React from "react";
import "../app.css";
import Hero from "../components/hero";
import SearchForm from "../components/Form";
import Aboutus from "../components/Aboutus";
import FavoritesPage from "../components/Favorite";
import Contact from "../components/contact";



const Home = ({ favorites, onToggleFav}) => {
    return (
        <div className="home-wrapper">
        
            <Hero />

            <section className="search-section" id="search-form-id">
                <div className="container">
                    <SearchForm />
                </div>
            </section>

            <section className="home-favorites-section" id="Favorites">
                <div className="container">
                    <FavoritesPage 
                        favorites={favorites} 
                        onToggleFav={onToggleFav} 
                    />
                </div>
            </section>

            <section className="about-preview-section">
                <Aboutus />
            </section>

            <Contact/>
            
        </div>
    );
}



export default Home;