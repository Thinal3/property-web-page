import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import '../style/SearchPage.css';
import FavoritesPage from '../components/Favorite';


const SearchPage = ({ favorites, onToggleFav }) => {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Retrieve the filtered results passed from SearchForm
    const results = location.state?.results || [];

    return (
        <div className="search-page-container" id='search-page-id'>
            <div className="results-header">

                <button className="back-link" onClick={() => navigate(-1)}>
                    ← Back to Search
                </button>

                <h1>Property Results</h1>
                <p>Showing {results.length} properties matching your search.</p>
            </div>

            <main className="results-display" >
                {results.length > 0 ? 
                (
                    <div className="property-column">
                        {results.map(prop => (

                            <PropertyCard 
                                key={prop.id} 
                                Property={prop} 
                                onToggleFav={onToggleFav}
                                isFav={favorites.some(fav => fav.id === prop.id)}
                            />

                        ))}
                    </div>
                ) : (
                    <div className="empty-state">

                        <h3>No properties found</h3>
                        <p>We couldn't find any properties matching those exact details.</p>

                        <button className="search-again-btn" onClick={() => navigate('/')}>
                            Try a new search
                        </button>

                    </div>
                    )}
            </main>
            
            <section className="home-favorites-section">
                <div className="container">
                    <FavoritesPage 
                        favorites={favorites} 
                        onToggleFav={onToggleFav} 
                    />
                </div>
            </section>
            
            
        </div>
    );
};

export default SearchPage;