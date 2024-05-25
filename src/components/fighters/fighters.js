import React from 'react';
import './Fighters.css'; // Assurez-vous de créer un fichier CSS pour le style

function Fighters({ fighters }) {
  return (
    <div>
      <h1>Les meilleurs fighters du moment</h1>
      <div className="fighters-container">
        {fighters.map(fighter => (
          <div key={fighter._id} className="fighter-card">
            <div className="left-section">
              <h2 className="text-black">{fighter.nom}</h2>
              <img src={fighter.image} alt={fighter.nom} className="fighter-image" />
              <p className="text-black">Âge : {fighter.age}</p> {/* Utiliser `fighter.age` au lieu de `fighter.âge` */}
              <img src={fighter.flag} alt="flag" className="flag-image" />
            </div>
            <div className="right-section">
              <p className="text-black">{fighter.description}</p>
              <h1 className="text-black">Highlight</h1>
              <iframe
                className="video-frame"
                width="560"
                height="315"
                src={fighter.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fighters;
