// App.js
import './App.css';
import React, { useState, useEffect } from 'react';
import LoadingSpinner from './components/homepage/js/LoadingSpinner';
import Navbar from './components/homepage/js/Navbar';
import CoverSection from './components/homepage/js/CoverSection';
import Info from './components/homepage/js/Info';
import Cards from './components/homepage/js/Cards';
import Footer from './components/homepage/js/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Navbar />
          <CoverSection />
          <Info />
          <Cards />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
