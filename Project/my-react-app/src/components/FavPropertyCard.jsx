
import '../style/FavPropertyCard.css';
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaBed} from "react-icons/fa";

const FavPropertyCard = ({Property, onToggleFav}) =>{

    const navigate = useNavigate();

    if (!Property) return null;

    const handleCardClick = () => {
        navigate(`/property/${Property.id}`);
    };

    const handleFavClick = (e) => {
        e.stopPropagation(); 
        onToggleFav(Property);
    };

    return(

        <div className="FavProperty-sec"  onClick={handleCardClick}>

            <div className="fav-img-wrapper">

                <img src={Property.images[0]} alt={Property.id} className="Fav-property-img"/>
                <div className="fav-tenure-tag">{Property.tenure}</div>

            </div>

            <div className="fav-card-text">
                
                <h2 className="Fav-property-loc">{Property.location}</h2>
                <h4 className="fav-property-price">{Property.price.toLocaleString()}</h4>
                <p className="fav-property-type">{Property.type}</p>

                <div className="fav-card-specs">

                    <span><FaBed /> {Property.bedrooms} Bedrooms</span>

                </div>

                <button className="mini-remove-btn" onClick={handleFavClick} title="Remove">
                    <FaTrashAlt />
                </button>
            </div>

        </div>
    );
}

export default FavPropertyCard;