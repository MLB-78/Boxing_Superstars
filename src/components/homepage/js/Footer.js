import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-icons">
            <a href="URL_LINKEDIN" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/icon/lk.png`} alt="LinkedIn" />
            </a>
            <a href="URL_GITHUB" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/icon/git.png`} alt="GitHub" />
            </a>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} MLB Production . Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
