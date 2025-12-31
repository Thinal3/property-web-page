import React, { useState } from 'react'; // Added React and useState
import SearchForm from './components/Form'; // Path to your Form.js
import NavBar from './components/nav';
import Footer from './components/Footer';
import Hero from './components/hero';
import "./app.css";



function App() {
  // Define the function that the Form expects as a prop
  const handleSearch = (results) => {
    console.log("Search button clicked! Found:", results);
    alert(`Search successful! Found ${results.length} properties. Check the console (F12) for data.`);
  };

  return (
    <div className="App">
      
      <NavBar/>
      <Hero/>

      <div  className='content'>{/* This is your Test Component */}
      <SearchForm onSearch={handleSearch} />
      </div>
      
      <Footer/>
      
    </div>
  );
}

export default App;
