<<<<<<< HEAD
import React from 'react';
import { FiArrowLeft, FiTool } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './UnderDevelopment.css';

const UnderDevelopment = () => {
  const navigate = useNavigate();

  return (
    <div className="under-development-container">
      <div className="under-development-card">
        <FiTool className="construction-icon" />
        <h1>Page Under Development</h1>
        <p>We're working hard to bring you this feature soon!</p>
        <button 
          onClick={() => navigate(-1)}
          className="back-button"
        >
          <FiArrowLeft /> Go Back
        </button>
      </div>
    </div>
  );
};

=======
import React from 'react';
import { FiArrowLeft, FiTool } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './UnderDevelopment.css';

const UnderDevelopment = () => {
  const navigate = useNavigate();

  return (
    <div className="under-development-container">
      <div className="under-development-card">
        <FiTool className="construction-icon" />
        <h1>Page Under Development</h1>
        <p>We're working hard to bring you this feature soon!</p>
        <button 
          onClick={() => navigate(-1)}
          className="back-button"
        >
          <FiArrowLeft /> Go Back
        </button>
      </div>
    </div>
  );
};

>>>>>>> 6e8f7a9 (Initial commit in new location)
export default UnderDevelopment;