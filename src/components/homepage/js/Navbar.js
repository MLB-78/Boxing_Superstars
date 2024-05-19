import React, { useState } from 'react';
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
          <a className="navbar-brand mx-auto" href="#">BOXING SUPERSTARS</a>
        </div>
        <button className={`navbar-toggler ${isCollapsed ? '' : 'active'}`} type="button" onClick={handleToggleClick}>
        <img src={`${process.env.PUBLIC_URL}/icon/menu.png`} id='menu' />
        </button>

          <div className={`navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">S'entraîner</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Fighters</a>
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
