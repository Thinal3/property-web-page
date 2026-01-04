
import React, { useState } from "react";
import { DropdownList, NumberPicker, Combobox } from "react-widgets";
import '../style/Form.css';
import "react-widgets/styles.css";
import { useNavigate } from 'react-router-dom';
import data from './properties.json';


const SearchForm = ({onSearch}) => {

    const navigate = useNavigate();

    const [type,setType]= useState("Any");    //for type of property

    const [minPrice,setMinPrice]= useState(); //for min price and max price of property
    const [maxPrice,setMaxPrice]= useState();

    const [minBed,setMinBed]= useState();     //for min bedroom and max bedroom of property
    const [maxBed,setMaxBed]= useState(); 

    const [postcode, setPostcode] = useState(""); //for postcode of property

    // function for handle search btn
    const propertiesFilter = () => {

        const result=data.properties.filter(prop => {

            const typeMatch= type==="Any" || prop.type === type;

            const priceMatch= (!minPrice || prop.price>= minPrice) && (!maxPrice || prop.price<=maxPrice);

            const bedMatch= (!minBed || prop.bedrooms>= minBed) && (!maxBed || prop.bedrooms<= maxBed);

            const postcodeMatch= !postcode || prop.postcode.toUpperCase().startsWith(postcode.toUpperCase());

            return typeMatch && priceMatch && bedMatch && postcodeMatch;

        });

        

        navigate('/search', { 
            state: { 
                results: result, 
                criteria:{ type, minPrice, maxPrice, minBed, maxBed, postcode } 
            } 
        });

        if(onSearch) onSearch(result);

};

    return(

        <div className="search-container" id="search-form-id">

            <h2 className="title">Find Your Dream Property.</h2>
        
            <div className="vertical-field">

                <label htmlFor="property-type" className="Form-label">Property types</label>
                <DropdownList
                    data={["Any","House","Flat"]}
                    value={type}
                    onChange={val => setType(val)}
                />

            </div>

            <div className="range-row">

                <div>
                    <label htmlFor="min-price" className="field-label">Min Price</label>
                    <NumberPicker 
                    min={50000}
                    step={50000}
                    value={minPrice} 
                    onChange={val => setMinPrice(val)} />
                </div>

                <div>
                    <label htmlFor="max-price" className="field-label">Max Price</label>
                    <NumberPicker 
                    min={minPrice || 50000}
                    step={50000}
                    value={maxPrice} 
                    onChange={val => setMaxPrice(val)} />
                </div>

            </div>
            

            <div className="range-row">
        
                <div>
                    <label htmlFor="min-bedrooms" className="field-label">Min Bedrooms</label>
                    <NumberPicker
                    min={1}
                    max={10}
                    step={1} 
                    value={minBed} 
                    onChange={val => setMinBed(val)} />
                </div>
        
                <div>
                    <label htmlFor="max-bedrooms" className="field-label">Max Bedrooms</label>
                    <NumberPicker 
                    min={minBed || 1}
                    max={10}
                    step={1}
                    value={maxBed} 
                    onChange={val => setMaxBed(val)} />
                </div>

            </div>

            
            <div className="vertical-field">

                <label htmlFor="postcode-area" className="Form-label">Postcode Area</label>
                <Combobox
                data={["SW7 1RH", "BR5", "BR6", "W8 6NA", "SW3","SW11","SW20"]} 
                value={postcode} 
                onChange={val => setPostcode(val)} 
                />

            </div>

            <button onClick={propertiesFilter} className="search-btn">Search Properties</button>

         </div>


    );

}

export default SearchForm;


