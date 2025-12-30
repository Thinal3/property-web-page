
import React, { useState } from "react";
import { DropdownList, NumberPicker, DatePicker, Combobox } from "react-widgets";
import './From.css';

import data from './properties.json';


const SearchForm = ({onSearch}) => {

    const [type,setType]= useState("Any");        //for type of property

    const [minPrice,setMinPrice]= useState(null); //for min price and max price of property
    const [maxPrice,setMaxPrice]= useState(null);

    const [minBed,setMinBed]= useState(null);     //for min bedroom and max bedroom of property
    const [maxBed,setMaxBed]= useState(null); 

    const [date, setDate]=useState(null);         //for add date of property

    const [postcode, setPostcode] = useState(""); //for postcode of property

    // function for handle search btn
    const propertiesFilter = () => {

        const result=data.properties.filter(prop => {

            const typeMatch= type==="Any" || prop.type === type;

            const priceMatch= (!minPrice || prop.price>= minPrice) && (!maxPrice || prop.price<=maxPrice);

            const bedMatch= (!minBed || prop.bedrooms>= minBed) && (!maxBed || prop.bedrooms<= maxBed);

            const postcodeMatch= !postcode || prop.postcode.toUpperCase().startsWith(postcode.toUpperCase());

            let dateMatch = true;
            if (date) {
                const propDate = new Date(`${prop.added.month} ${prop.added.day}, ${prop.added.year}`);
                dateMatch = propDate >= addedAfter;
            }

            return typeMatch && priceMatch && bedMatch && postcodeMatch && dateMatch;

        });

        onSearch(result);

    };

    return(

         <div className="search-container">

            <h2 className="title">Find Your Dream Property.</h2>
        
            <div className="vertical-field">

                <label className="Form-label">Property types</label>
                <DropdownList
                    data={["Any","House","Flat"]}
                    value={type}
                    onChange={val => setType(val)}
                />

            </div>

            <div className="range-row">

                <div>
                    <label className="field-label">Min Price</label>
                    <NumberPicker value={minPrice} onChange={val => setMinPrice(val)} />
                </div>

                <div>
                    <label className="field-label">Max Price</label>
                    <NumberPicker value={maxPrice} onChange={val => setMaxPrice(val)} />
                </div>

            </div>

            <div className="range-row">
        
                <div>
                    <label className="field-label">Min Bedrooms</label>
                    <NumberPicker value={minBed} onChange={val => setMinBed(val)} />
                </div>
        
                <div>
                    <label className="field-label">Max Bedrooms</label>
                    <NumberPicker value={maxBed} onChange={val => setMaxBed(val)} />
                </div>

            </div>

            <div className="vertical-field">

                <label className="Form-label">Added After Date</label>
                <DatePicker
                    value={date}
                    onChange={val=> setDate(val)}
                />

            </div>

            <div className="vertical-field">

                <label className="Form-label">Postcode Area</label>
                <Combobox
                data={["BR1", "BR5", "BR6", "NW1", "SW3"]} 
                value={postcode} 
                onChange={val => setPostcode(val)} 
                />

            </div>

            <button onClick={propertiesFilter} className="search-btn">Search Properties</button>

         </div>


    );

}

export default SearchForm;


