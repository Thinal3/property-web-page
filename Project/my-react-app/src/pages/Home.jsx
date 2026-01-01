import React from "react";
import "../app.css";
import Hero from "../components/hero";
import SearchForm from "../components/Form";
import Aboutus from "../components/Aboutus";




const Home = () => {
    return (
        <div className="home-wrapper">
        
            <Hero />

            <section className="search-section" id="search-form-id">
                <div className="container">
                    <SearchForm />
                </div>
            </section>

            <section className="about-preview-section">
                <Aboutus />
            </section>
        </div>
    );
}



export default Home;