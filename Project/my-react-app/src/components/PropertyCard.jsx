import React, { useState } from "react";
import '../style/propertyCade.css';
import { useNavigate } from "react-router-dom";
import {FaBed, FaMapMarkerAlt,FaHeart, FaRegHeart} from "react-icons/fa";

const PropertyCard = ({Property, onToggleFav, isFav}) =>{

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/property/${Property.id}`);
    };

    const handleFavClick = (e) => {
        e.stopPropagation();
        onToggleFav(Property);
    };

    return(

        <div className="property-sec"  onClick={handleCardClick}>

            <div className="img-wrapper">

                <img src={Property.images[0]} alt={Property.id} className="property-img"/>
                <div className="tenure-tag">{Property.tenure}</div>

            </div>

            <div className="card-text">
                
                <h2 className="property-loc">{Property.location}</h2>
                <h4 className="property-price">{Property.price.toLocaleString()}</h4>
                <p className="property-type">{Property.type}</p>

                <div className="card-specs">

                    <span><FaBed /> {Property.bedrooms} Bedrooms</span>
                    <span className="postcode-pill"><FaMapMarkerAlt className="loc-icon" /> {Property.postcode}</span>

                </div>

                <button className="fav-btn" onClick={handleFavClick}>
                    {isFav ? <FaHeart className="heart-filled" /> : <FaRegHeart />}
                </button>
            </div>

        </div>
    );
}

export default PropertyCard;