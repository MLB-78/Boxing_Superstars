import React from 'react';
import '../css/LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
        <div className="dot4"></div>
        <div className="dot5"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
