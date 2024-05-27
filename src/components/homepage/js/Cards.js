import React from 'react';
import '../css/Cards.css';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className="cards">
        <br></br>
        <h1>RUBRIQUES PRINCIPALES</h1>
        <br></br>
        <div className="cardImage">
        <div className="c1">
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/images/rubriques/training.jpg`} alt="Training" />
            <div className="text-overlay">
              <span>Entraînement</span>
            </div>
          </div>
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/images/rubriques/demarrer.gif`} alt="Demarrer" />
            <div className="text-overlay">
              <span>Démarrer une session</span>
            </div>
          </div>
        </div>
        <br></br>
        <div className="c2">
          <div className="image-container">
          <Link to="/fighters" className="nav-link">
            <img src={`${process.env.PUBLIC_URL}/images/rubriques/fighters.jpg`} alt="Combattants" />
          </Link>
              <div className="text-overlay">
                <span>Liste des fighters</span>
              </div>
          </div>
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/images/rubriques/premium.jpg`} alt="Premium" />
              <div className="text-overlay">
                <span>Premium</span>
              </div>
          </div>
        </div>

        </div>
        <br></br><br></br>
    </div>
  )
}

export default Cards