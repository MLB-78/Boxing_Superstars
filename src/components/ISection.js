import React from 'react';
import './ISection.css';
function AdeSection() {
  return (
    <section className="ade-section">
      <div className="background-image">
        {/* Image de fond */}
        <img src="images/cage.jpg" alt="Background" />
      </div>
      <div className="content">
        {/* Boutons */}
        <button className="btn btn-primary">Commencer</button>
        <button className="btn btn-primary">B.S c'est quoi ?</button>
      </div>
    </section>
  );
}

export default AdeSection;
