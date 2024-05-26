import React, { useState } from 'react';
import './Fighters.css';

function Fighters({ fighters }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? fighters.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === fighters.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <h1>Les meilleurs fighters du moment</h1>
      <div className="carousel">
        <button className="arrow left-arrow" onClick={handlePrevClick}>←</button>
        <div className="fighters-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {fighters.map((fighter) => (
            <div key={fighter._id} className="fighter-card">
              <div className="left-section">
                <h2 className="text-black">{fighter.nom}</h2>
                <img src={fighter.image} alt={fighter.nom} className="fighter-image" />
                <p className="text-black">Âge : {fighter.age}</p>
                <img src={fighter.flag} alt="flag" className="flag-image" />
              </div>
              <div className="right-section">
                <p className="text-black">{fighter.description}</p>
                <h1 className="text-black">Highlight</h1>
                <iframe
                  className="video-frame"
                  src={`https://www.youtube.com/embed/${extractVideoId(fighter.video)}`} // Utilisez la fonction extractVideoId pour obtenir uniquement l'ID de la vidéo
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={handleNextClick}>→</button>
      </div>
    </div>
  );
}

// Fonction pour extraire l'ID de la vidéo YouTube à partir de l'URL
function extractVideoId(videoUrl) {
  const videoIdRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = videoUrl.match(videoIdRegex);
  return match ? match[1] : null;
}

export default Fighters;
