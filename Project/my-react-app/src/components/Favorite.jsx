import React from "react";
import FavPropertyCard from "./FavPropertyCard";
import "../style/favorits.css";


const FavoritesPage = ({ favorites, onToggleFav }) => {

    return (

        <div className="favorites-container">

            <div className="favorites-header">
                <h3>My Shortlist ({favorites.length})</h3>
            </div>
            
            <div className="favorites-list">

                {favorites.length > 0 ? 
                (
                    favorites.map((item) => (
                        <FavPropertyCard 
                            key={item.id} 
                            Property={item} 
                            onToggleFav={onToggleFav} 
                        />
                    ))
                ) 
                : (
                    <div className="empty-message">
                        <p>No properties saved.click the heart to add favorites!</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default FavoritesPage;

