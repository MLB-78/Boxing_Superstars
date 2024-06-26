import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-darkblue">
      <div className="container">
        <div className="navbar-header mx-auto">
          <Link to="/" className="navbar-brand mx-auto">BOXING SUPERSTARS</Link>
        </div>
        <button className={`navbar-toggler ${isCollapsed ? '' : 'active'}`} type="button" onClick={handleToggleClick}>
          <img src={`${process.env.PUBLIC_URL}/icon/menu.png`} id='menu' alt="Menu icon" />
        </button>
        <div className={`navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">S'entraîner</a>
            </li>
            <li className="nav-item">
              <Link to="/fighters" className="nav-link">Fighters</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Session</a>
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
