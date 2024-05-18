import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-darkblue">
      <div className="container">
        <div className="navbar-header mx-auto">
          <a className="navbar-brand mx-auto" href="#">Boxing Superstars</a>
        </div>
        <button className={`navbar-toggler ${isCollapsed ? '' : 'active'}`} type="button" onClick={handleToggleClick}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Top Fighters</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Session d'entraînement</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="btn btn-outline-light mr-2">Se connecter</button>
            </li>
            &nbsp;
            <li className="nav-item">
              <button className="btn btn-light">S'inscrire</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
