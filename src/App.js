import './App.css';
import React, { useState, useEffect } from 'react';
import LoadingSpinner from './components/homepage/js/LoadingSpinner';
import Navbar from './components/homepage/js/Navbar';
import CoverSection from './components/homepage/js/CoverSection';
import Info from './components/homepage/js/Info';
import Cards from './components/homepage/js/Cards';
import Footer from './components/homepage/js/Footer';
import Fighters from './components/fighters/Fighters'; // Import correct de Fighters
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/fighters');
        const data = await response.json();
        setFighters(data);
      } catch (error) {
        console.error('Error fetching fighters data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Routes>
            <Route path="/" element={
              <div className="homepage">
                <CoverSection />
                <Info />
                <Cards />
              </div>
            } />
            <Route path="/fighters" element={
              <div className="fighters">
                <Fighters fighters={fighters} />
              </div>
            } />
          </Routes>
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
