import React, { useEffect, useRef, useState } from "react";
import "../style/aboutus.css";

const Aboutus=() =>{

    const aboutRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return(


         <div
            ref={aboutRef}
            className={`about-container scroll-animate ${visible ? "show" : ""}`}
            id="about-id"
        >

        
            <section className="mission-section">
                <div className="mission-content">

                    <h2>Our Mission</h2>

                    <p>
                        At <strong>Freedom</strong>, we believe that finding a property isn't just a transaction; 
                        it's the start of a new chapter. Our platform is designed to give you the 
                        <em> freedom</em> to explore, save, and organize your future homes with ease 
                        and transparency.
                    </p>

                </div>

                <div className="mission-image">
                    <img src="https://images.unsplash.com/photo-1729160403927-5a83044f43ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Modern Architecture" />
                </div>

            </section>

        
            <section className="values-grid">
                <div className="value-card">

                    <div className="icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                    </div>

                    <h3>Diverse Listings</h3>
                    <p>From modern city flats to spacious family houses, we cover every property type.</p>
                </div>

                <div className="value-card">

                    <div className="icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>
                    
                    <h3>Local Expertise</h3>
                    <p>Detailed postcode search to ensure you find a home in the neighborhood of your dreams.</p>

                </div>

                <div className="value-card">

                    <div className="icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </div>

                    <h3>User-Centric</h3>
                    <p>Our unique favorites system lets you drag, drop, and organize your shortlist seamlessly.</p>

                </div>

            </section>
        </div>
    );

}

export default Aboutus;