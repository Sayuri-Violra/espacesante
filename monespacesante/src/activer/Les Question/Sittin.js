import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Questionnaire.css';
import Arrow from './Arrow.png';
import ActPh from './ActPh.js';
import './Activer.css';

const Sittin = () => {
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

  const isSuivantVisible = selectedOption !== null;

  return (
    <div>
      <a href="/écran" className="Retour">
        <img src={Arrow} className="Arrow" /> &nbsp;
        Etape précédente
      </a>
      <progress className="Bar" id="loading-bar" value="30" max="100" ></progress>
      <h2 className="JeSuis">Je suis souvent assis(e) sans bouger pendant plus de 2 heures</h2>
      <div className="options-container">
        <div className="option" onClick={() => handleOptionClick('fun')}>
          <div className={`circle ${selectedOption === 'fun' ? 'selected' : ''}`}></div>
          <span>Dans mes loisirs</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('Job')}>
          <div className={`circle ${selectedOption === 'Job' ? 'selected' : ''}`}></div>
          <span>Dans mon travail</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('Both')}>
          <div className={`circle ${selectedOption === 'Both' ? 'selected' : ''}`}></div>
          <span>Les deux</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('None')}>
          <div className={`circle ${selectedOption === 'None' ? 'selected' : ''}`}></div>
          <span>Aucun des deux</span>
        </div>
      </div>

      <a href="http://localhost:3000/Activer">
        <button className="Plus_Tard">
          <Link className="Repairing" to="http://localhost:3000/Activer">
            Continuer plus tard
          </Link>
        </button>
      </a>

      {isSuivantVisible && ( // Show "Suivant" button only if an option is selected
        <button className="Continuer">
          <Link className="Repair" to="/ActPh">
            Suivant
          </Link>
        </button>
      )}
    </div>
  );
};

export default Sittin;
