import React from 'react';
import '../css/CoverSection.css';

function AdeSection() {
  return (
    <section className="ade-section">
      <div className="background-image">
      <img src={`${process.env.PUBLIC_URL}/images/cb.jpg`} alt="Fight" />
      </div>
      <div className="content">
        <button className="btn btn-primary">Commencer</button>
        <button className="btn btn-primary">En savoir plus</button>
      </div>
    </section>
  );
}

export default AdeSection;
