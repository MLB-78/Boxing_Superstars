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
        <button className="btn btn-primary">
          <a href="#orga" >En savoir plus</a>
        </button>
      </div>
    </section>
  );
}

export default AdeSection;
