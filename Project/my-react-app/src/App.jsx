import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/nav';
import Footer from './components/Footer';
import SearchPage from './pages/searchResult'; 
import "./app.css";
import Home from './pages/Home';
import PropertyPage from './pages/PropertyPage';

function App() {
  
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (property) => {
    setFavorites((prev) => {
      const isExist = prev.find((item) => item.id === property.id);
      if (isExist) {
        return prev.filter((item) => item.id !== property.id); // Remove
      }
      return [...prev, property]; // Add
    });

  };

  return (
    <Router>
      <div className="App">
        <NavBar /> 
        
        <Routes>
          <Route path="/" element={
            <>
              <Home favorites={favorites}  onToggleFav={toggleFavorite}/>
            </>
          } />

          
          <Route 
            path="/search" 
            element={
              <SearchPage favorites={favorites} onToggleFav={toggleFavorite} />
            } 
          />

          <Route
            path='/property/:id' element={<PropertyPage/>}
          />
          

        </Routes>


        <Footer />
      </div>
    </Router>
  );
}
export default App;