import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Questionnaire.css';
import Arrow from './Arrow.png';
import écran from './écran.js';
import './Activer.css';

const Dors = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAdditionalOption1, setSelectedAdditionalOption1] = useState(null);
  const [selectedAdditionalOption2, setSelectedAdditionalOption2] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSelectedAdditionalOption1(null); // Deselect any additional option when the main option changes
    setSelectedAdditionalOption2(null); // Deselect any additional option when the main option changes
  };

  const handleAdditionalOptionClick1 = (option) => {
    setSelectedAdditionalOption1(option);
  };

  const handleAdditionalOptionClick2 = (option) => {
    setSelectedAdditionalOption2(option);
  };

  return (
    <div>
      <a href="/Travail" className="Retour">
        <img src={Arrow} className="Arrow" /> &nbsp;
        Etape précédente
      </a>
      <progress className="Bar" id="loading-bar" value="20" max="100"></progress>
      <h2 className="JeSuis">Je dors</h2>
      <div className="options-container">
        <div className="option" onClick={() => handleOptionClick('bien')}>
          <div className={`circle ${selectedOption === 'bien' ? 'selected' : ''}`}></div>
          <span>bien</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('meh')}>
          <div className={`circle ${selectedOption === 'meh' ? 'selected' : ''}`}></div>
          <span>mal de temps en temps</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('mal')}>
          <div className={`circle ${selectedOption === 'mal' ? 'selected' : ''}`}></div>
          <span>mal tout le temps</span>
        </div>
      </div>

      <a href="http://localhost:3000/Activer">
        <button className="Plus_Tard">
          <Link className="Repairing" to="http://localhost:3000/Activer">
            Continuer plus tard
          </Link>
        </button>
      </a>

      {selectedOption && ( // Show "Suivant" button only if an option is selected
        <button className="Continuer">
          <Link className="Repair" to="/écran">
            Suivant
          </Link>
        </button>
      )}
    </div>
  );
};

export default Dors;
