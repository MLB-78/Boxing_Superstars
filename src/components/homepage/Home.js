// components/homepage/Home.js
import React from 'react';
import CoverSection from './js/CoverSection'; // Chemin correct vers CoverSection
import Info from './js/Info'; // Chemin correct vers Info
import Cards from './js/Cards'; // Chemin correct vers Cards

function Home() {
  return (
    <div>
      <CoverSection />
      <Info />
      <Cards />
    </div>
  );
}

export default Home;
