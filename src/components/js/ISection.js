import React from 'react';
import '../css/ISection.css';

function AdeSection() {
  return (
    <section className="ade-section">
      <div className="background-image">
        <img src="images/cb.jpg" alt="Background" />
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
